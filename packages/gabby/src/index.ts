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
 
import Gabby from './Gabby';
import parseReactRoutes from './utils/parseReactRoutes';

import Root from './components/Root';
import Route from './components/Route';
import Redirect from './components/Redirect';

import Watson from './adapters/Watson';

export {
  parseReactRoutes,
  Root,
  Route,
  Redirect,
  Watson,
};

export default Gabby;
