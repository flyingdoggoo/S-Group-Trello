export type EntityWithIdentifier = {
  id: string;
  slug?: string | null;
};

export function getEntityRouteIdentifier(entity?: EntityWithIdentifier | null): string {
  if (!entity) {
    return "";
  }

  return entity.slug || entity.id;
}

export function entityMatchesIdentifier(
  entity: EntityWithIdentifier,
  identifier: string
): boolean {
  return entity.id === identifier || entity.slug === identifier;
}
