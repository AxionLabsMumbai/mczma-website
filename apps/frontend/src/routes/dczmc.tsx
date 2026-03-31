import { createFileRoute } from '@tanstack/react-router';
import DCZMC from '../pages/DCZMC';

export const Route = createFileRoute('/dczmc')({
  component: DCZMC,
});
