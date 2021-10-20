import { FC } from "react";

export enum TASK_STATES {
  TASK_INBOX = "TASK_INBOX",
  TASK_PINNED = "TASK_PINNED",
  TASK_ARCHIVED = "TASK_ARCHIVED",
}
interface ITaskProps {
  task: {
    id: string;
    title: string;
    state: TASK_STATES;
    updatedAt: Date;
  };
  onArchiveTask: (id: string) => {};
  onPinTask: (id: string) => {};
}

export const Task: FC<ITaskProps> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) => {
  return (
    <div>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};
