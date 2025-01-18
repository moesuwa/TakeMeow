import { UserProfile, CatProfile } from 'presenters/models';
import { nanoid } from 'nanoid';

/** タスクの対象を定義する型 */
export type TaskTarget = CatProfile | UserProfile | 'catAll' | 'userAll' | 'all';

/** タスク内容を定義するインターフェース */
export interface Task {
  /** ID */
  id: string;
  /** タイトル */
  title: string;
  /** 完了フラグ */
  completed: boolean;
  /** このタスクを実施する対象 */
  target: TaskTarget | undefined;
  /** 詳細 */
  memo: string | undefined;
  /** 期限 */
  deadline: Date | undefined;
  /** このタスクを行う人 */
  assignee: UserProfile | undefined;
}

/** 新しいタスクを生成する */
export const createNewTask = (
  title: string,
  target: TaskTarget,
  memo?: string,
  deadline?: Date,
  assignee?: UserProfile
): Task => {
  const task: Task = {
    id: nanoid(),
    title: title,
    completed: false,
    target: target,
    memo: memo,
    deadline: deadline,
    assignee: assignee,
  };
  return task;
};
