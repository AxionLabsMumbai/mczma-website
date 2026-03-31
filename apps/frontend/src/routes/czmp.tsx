import { createFileRoute } from '@tanstack/react-router';
import CZMP from '../pages/CZMP';

export const Route = createFileRoute('/czmp')({
  component: CZMP,
});
