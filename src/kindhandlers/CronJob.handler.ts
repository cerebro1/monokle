import * as k8s from '@kubernetes/client-node';
import {ResourceKindHandler} from '@models/resourcekindhandler';
import {PodOutgoingRefMappers} from './common/outgoingRefMappers';

const CronJobHandler: ResourceKindHandler = {
  kind: 'CronJob',
  apiVersionMatcher: '*',
  description: '',
  getResourceFromCluster(name: string, namespace: string, kubeconfig: k8s.KubeConfig): Promise<any> {
    return Promise.resolve();
  },
  listResourcesInCluster(kubeconfig: k8s.KubeConfig): Promise<any[]> {
    return Promise.resolve([]);
  },
  outgoingRefMappers: [...PodOutgoingRefMappers],
};

export default CronJobHandler;
