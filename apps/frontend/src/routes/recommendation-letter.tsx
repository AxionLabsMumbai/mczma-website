import { createFileRoute } from '@tanstack/react-router';
import RecommendationLetter from '../pages/RecommendationLetter';

export const Route = createFileRoute('/recommendation-letter')({
  component: RecommendationLetter,
});
