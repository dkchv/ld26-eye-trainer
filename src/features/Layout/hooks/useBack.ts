import { useCallback } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';

export function useParentUrl() {
  const location = useLocation();
  const match = useRouteMatch();

  return location.pathname === match.path
    ? '/'
    : match.url;
}

export function useParentHandler() {
  const history = useHistory();
  const url = useParentUrl();

  return useCallback(() => {
    history.push(url);
  }, [ history, url ]);
}
