export interface CgBusyOptions {
  promise: CgBusyPromise;
  templateUrl?: string;
  message?: string;
  backdrop?: boolean;
  delay?: number;
  minDuration?: number;
}

export type CgBusyPromise = any;
