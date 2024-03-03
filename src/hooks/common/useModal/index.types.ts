export interface CloseActionsType {
  primaryAction: () => void | Promise<void>;
  secondaryAction?: () => void | Promise<void>;
}
