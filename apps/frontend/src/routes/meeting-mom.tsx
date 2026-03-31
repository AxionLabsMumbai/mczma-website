import { createFileRoute } from '@tanstack/react-router';
import MeetingMOM from '../pages/MeetingMOM';

export const Route = createFileRoute('/meeting-mom')({
  component: MeetingMOM,
});
