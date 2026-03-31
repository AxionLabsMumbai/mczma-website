import { createFileRoute } from '@tanstack/react-router';
import MeetingAgenda from '../pages/MeetingAgenda';

export const Route = createFileRoute('/meeting-agenda')({
  component: MeetingAgenda,
});
