// Type definitions for jest-environment-puppeteer 4.3
// Project: https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-environment-puppeteer
// Definitions by: Josh Goldberg <https://github.com/joshuakgoldberg>
//                 Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import { JestEnvironment } from '@jest/environment';
import { JestFakeTimers as FakeTimers } from '@jest/fake-timers';
import { Circus, Global as GlobalType, Config } from '@jest/types';
import { ModuleMocker } from 'jest-mock';
import { Browser, Page, BrowserContext } from 'puppeteer';
import { Script, Context } from 'vm';

interface Global extends GlobalType.Global {
    browser: Browser;
    context: Context;
    page: Page;
    jestPuppeteer: JestPuppeteer;
}

/** Note: TestEnvironment is sandboxed. Each test suite will trigger setup/teardown in their own TestEnvironment. */
declare class PuppeteerEnvironment implements JestEnvironment {
  fakeTimers: FakeTimers<Timer> | null;
  global: Global;
  moduleMocker: ModuleMocker | null;
  constructor(config: Config.ProjectConfig);

  /**
   * Setup runs when the environment is being spun up, generally before each test suite
   * You should always call `await super.setup()` in here
   */
  setup(): Promise<void>;

  /**
   * Teardowns runs as the environment is being torn down, generally after each test suite.
   * You should always call `await super.tearDown()` in here
   */
  teardown(): Promise<void>;
  runScript(script: Script): any;
  handleTestEvent?(event: Circus.Event, state: Circus.State): void;
}

declare global {
    const browser: Browser;
    const page: Page;
}

export = PuppeteerEnvironment;