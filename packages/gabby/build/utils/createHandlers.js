"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
function createHandlers(routes) {
    var tree = new Map();
    function recurse(node) {
        var name = node.name, children = node.children, handler = node.handler;
        if (handler) {
            tree.set(name, handler);
        }
        children.forEach(function (child) { return recurse(child); });
    }
    recurse(routes);
    return tree;
}
exports.default = createHandlers;
//# sourceMappingURL=createHandlers.js.map