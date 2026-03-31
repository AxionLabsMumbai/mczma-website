import { createFileRoute } from '@tanstack/react-router';
import CourtMatters from '../pages/CourtMatters';

export const Route = createFileRoute('/court-matters')({
  component: CourtMatters,
});
