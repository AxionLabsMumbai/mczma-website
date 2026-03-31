import { createFileRoute } from '@tanstack/react-router';
import NotificationsCirculars from '../pages/NotificationsCirculars';

export const Route = createFileRoute('/notifications')({
  component: NotificationsCirculars,
});
