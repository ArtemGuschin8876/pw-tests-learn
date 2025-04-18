import { APIRequestContext} from '@playwright/test'
import { ClientManager } from '../api/clients/clientManager';
import { test as clients } from '../fixtures/auth'
import { test as randomRelease} from '../fixtures/data'
import { mergeTests } from '@playwright/test';
import { ReleaseResponse } from '../models/api.models/release.response';

export type Fixtures = {
    authorizedContext: APIRequestContext;
    unathorizedContext: APIRequestContext;
    testData: number;
    clients: ClientManager;
    randomRelease: ReleaseResponse;
    randomReleaseID: number
}

export const test = mergeTests(clients, randomRelease)

