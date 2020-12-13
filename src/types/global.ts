export type MessageData = {
  title: string;
  introduce: string;
  link?: string;
  time: number;
};

export type InitialState = {
  messageList: MessageData[];
};
