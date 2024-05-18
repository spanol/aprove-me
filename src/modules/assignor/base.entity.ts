import { randomUUID } from 'crypto';

export interface BaseEntityProps {
  id: string;
  createdAt?: Date;
}

export abstract class BaseEntity<T extends BaseEntityProps> {
  private _id: string;
  protected props: T;

  constructor(props: T, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}