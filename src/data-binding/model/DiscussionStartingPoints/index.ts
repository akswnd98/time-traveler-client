import { useState } from "react";

export type DiscussionStartingPoint = {
  id: number;
  writerId: number;
  writer: string;
  firstUpload: string;
  body: string;
};

export default class DiscussionStartingPoints {
  readonly discussionStartingPoints: DiscussionStartingPoint[];
  private setDiscussionStartingPoints: React.Dispatch<React.SetStateAction<DiscussionStartingPoint[]>>;

  constructor () {
    [this.discussionStartingPoints, this.setDiscussionStartingPoints] = useState<DiscussionStartingPoint[]>([]);
  }

  update (value: DiscussionStartingPoint[]) {
    this.setDiscussionStartingPoints(value);
  }
}
