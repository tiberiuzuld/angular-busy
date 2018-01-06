export interface cgBusyOptions {
  promise: cgBusyPromise;
  templateUrl?: string;
  message?: string;
  backdrop?: boolean;
  delay?: number;
  minDuration?: number;
}

export type cgBusyPromise = any;
