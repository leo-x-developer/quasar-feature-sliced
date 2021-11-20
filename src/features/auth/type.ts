import { Viewer } from '@shared/api';

export interface AuthState {
  authenticating: boolean;
  viewer: Viewer;
  error?: Error | null;
}
