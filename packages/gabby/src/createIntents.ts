/*
 * Copyright 2017 American Express
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
 
import { IIntents } from './interfaces';

// map our easier to use interface to the more complicated watson interface
export default function createEntity(intents: IIntents) {
  return intents.map(intent => ({
    intent: intent.name,
    examples: intent.phrases.map(text => ({ text })),
    description: intent.description,
  }));
}
