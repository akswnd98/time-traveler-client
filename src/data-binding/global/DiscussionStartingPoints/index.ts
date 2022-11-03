import DiscussionStartingPoints from '@src/data-binding/model/DiscussionStartingPoints';

export let discussionStartingPoints: DiscussionStartingPoints | undefined = undefined;

export default function useDiscussionStartingPoints () {
  return (discussionStartingPoints = new DiscussionStartingPoints());
}
