import { AppRepository } from '../app.repository';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nanoid } = require('nanoid');

@Injectable()
export class UserRepository extends AppRepository<UserEntity> {
  constructor() {
    super('./db/user.db');
  }

  async addLibrary({ _id }: UserEntity, url: string): Promise<UserEntity> {
    const data = { _id: nanoid(), url };
    return new Promise((resolve, reject) => {
      this.nedb.update({ _id }, { $push: { bookmark: data } }, (error, doc) => {
        if (error) {
          reject(error);
        }
        resolve(doc);
      });
    });
  }

  async removeLibrary({ _id }: UserEntity, libraryId: string): Promise<number> {
    return new Promise((resolve, reject) => {
      this.nedb.update(
        { _id },
        { $pull: { bookmark: { _id: libraryId } } },
        (error, doc) => {
          if (error) {
            reject(error);
          }
          resolve(doc);
        },
      );
    });
  }
}
