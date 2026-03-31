import { createFileRoute } from '@tanstack/react-router';
import WhatsNew from '../pages/WhatsNew';

export const Route = createFileRoute('/whats-new')({
  component: WhatsNew,
});
