import {has, size} from 'lodash';
import {createSelector} from 'reselect';

import {RootState} from '../models/rootState';

export const transientResourceCountSelector = createSelector(
  // TODO: could we memoize this for only the count? maybe a new `createCountSelector`?
  (state: RootState) => state.main.resourceMetaMapByStorage.transient,
  transientMetaStorage => {
    return size(transientMetaStorage);
  }
);

export const isInPreviewModeSelector = createSelector(
  (state: RootState) => state.main.preview,
  preview => {
    return Boolean(preview);
  }
);

export const activeProjectSelector = createSelector(
  [(state: RootState) => state.config.projects, (state: RootState) => state.config.selectedProjectRootFolder],
  (projects, selectedProjectRootFolder) => projects.find(p => p.rootFolder === selectedProjectRootFolder)
);

export const kubeConfigPathValidSelector = createSelector(
  [(state: RootState) => state.config.projectConfig?.kubeConfig, (state: RootState) => state.config.kubeConfig],
  (projectKubeConfig, globalKubeConfig) => {
    if (has(projectKubeConfig, 'isPathValid')) {
      return Boolean(projectKubeConfig?.isPathValid);
    }

    return Boolean(globalKubeConfig.isPathValid);
  }
);
