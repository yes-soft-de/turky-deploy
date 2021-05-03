function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cars-cars-module~categories-categories-module~chats-chats-module~devices-devices-module~prod~36d02cfd"], {
  /***/
  "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js ***!
    \************************************************************************/

  /*! exports provided: Dictionary, createEntityAdapter */

  /***/
  function node_modulesNgrxEntity__ivy_ngcc__Fesm2015NgrxEntityJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dictionary", function () {
      return Dictionary;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function () {
      return createEntityAdapter;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/entity_state.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template V
     * @return {?}
     */


    function getInitialEntityState() {
      return {
        ids: [],
        entities: {}
      };
    }
    /**
     * @template V
     * @return {?}
     */


    function createInitialStateFactory() {
      /**
       * @param {?=} additionalState
       * @return {?}
       */
      function getInitialState() {
        var additionalState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return Object.assign(getInitialEntityState(), additionalState);
      }

      return {
        getInitialState: getInitialState
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/state_selectors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @return {?}
     */


    function createSelectorsFactory() {
      /**
       * @param {?=} selectState
       * @return {?}
       */
      function getSelectors(selectState) {
        /** @type {?} */
        var selectIds =
        /**
        * @param {?} state
        * @return {?}
        */
        function selectIds(state) {
          return state.ids;
        };
        /** @type {?} */


        var selectEntities =
        /**
        * @param {?} state
        * @return {?}
        */
        function selectEntities(state) {
          return state.entities;
        };
        /** @type {?} */


        var selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, selectEntities,
        /**
        * @param {?} ids
        * @param {?} entities
        * @return {?}
        */
        function (ids, entities) {
          return ids.map(
          /**
          * @param {?} id
          * @return {?}
          */
          function (id) {
            return (
              /** @type {?} */
              entities[id]
            );
          });
        });
        /** @type {?} */

        var selectTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds,
        /**
        * @param {?} ids
        * @return {?}
        */
        function (ids) {
          return ids.length;
        });

        if (!selectState) {
          return {
            selectIds: selectIds,
            selectEntities: selectEntities,
            selectAll: selectAll,
            selectTotal: selectTotal
          };
        }

        return {
          selectIds: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectIds),
          selectEntities: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectEntities),
          selectAll: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectAll),
          selectTotal: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectTotal)
        };
      }

      return {
        getSelectors: getSelectors
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/state_adapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var DidMutate = {
      EntitiesOnly: 0,
      Both: 1,
      None: 2
    };
    DidMutate[DidMutate.EntitiesOnly] = 'EntitiesOnly';
    DidMutate[DidMutate.Both] = 'Both';
    DidMutate[DidMutate.None] = 'None';
    /**
     * @template V, R
     * @param {?} mutator
     * @return {?}
     */

    function createStateOperator(mutator) {
      return (
        /**
        * @template S
        * @param {?} arg
        * @param {?} state
        * @return {?}
        */
        function operation(arg, state) {
          /** @type {?} */
          var clonedEntityState = {
            ids: _toConsumableArray(state.ids),
            entities: Object.assign({}, state.entities)
          };
          /** @type {?} */

          var didMutate = mutator(arg, clonedEntityState);

          if (didMutate === DidMutate.Both) {
            return Object.assign({}, state, clonedEntityState);
          }

          if (didMutate === DidMutate.EntitiesOnly) {
            return Object.assign(Object.assign({}, state), {
              entities: clonedEntityState.entities
            });
          }

          return state;
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} entity
     * @param {?} selectId
     * @return {?}
     */


    function selectIdValue(entity, selectId) {
      /** @type {?} */
      var key = selectId(entity);

      if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && key === undefined) {
        console.warn('@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
      }

      return key;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/unsorted_state_adapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} selectId
     * @return {?}
     */


    function createUnsortedStateAdapter(selectId) {
      /**
       * @param {?} entity
       * @param {?} state
       * @return {?}
       */
      function addOneMutably(entity, state) {
        /** @type {?} */
        var key = selectIdValue(entity, selectId);

        if (key in state.entities) {
          return DidMutate.None;
        }

        state.ids.push(key);
        state.entities[key] = entity;
        return DidMutate.Both;
      }
      /**
       * @param {?} entities
       * @param {?} state
       * @return {?}
       */


      function addManyMutably(entities, state) {
        /** @type {?} */
        var didMutate = false;

        var _iterator = _createForOfIteratorHelper(entities),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entity = _step.value;
            didMutate = addOneMutably(entity, state) !== DidMutate.None || didMutate;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return didMutate ? DidMutate.Both : DidMutate.None;
      }
      /**
       * @param {?} entities
       * @param {?} state
       * @return {?}
       */


      function setAllMutably(entities, state) {
        state.ids = [];
        state.entities = {};
        addManyMutably(entities, state);
        return DidMutate.Both;
      }
      /**
       * @param {?} entity
       * @param {?} state
       * @return {?}
       */


      function setOneMutably(entity, state) {
        /** @type {?} */
        var key = selectIdValue(entity, selectId);

        if (key in state.entities) {
          state.entities[key] = entity;
          return DidMutate.EntitiesOnly;
        }

        state.ids.push(key);
        state.entities[key] = entity;
        return DidMutate.Both;
      }
      /**
       * @param {?} key
       * @param {?} state
       * @return {?}
       */


      function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
      }
      /**
       * @param {?} keysOrPredicate
       * @param {?} state
       * @return {?}
       */


      function removeManyMutably(keysOrPredicate, state) {
        /** @type {?} */
        var keys = keysOrPredicate instanceof Array ? keysOrPredicate : state.ids.filter(
        /**
        * @param {?} key
        * @return {?}
        */
        function (key) {
          return keysOrPredicate(state.entities[key]);
        });
        /** @type {?} */

        var didMutate = keys.filter(
        /**
        * @param {?} key
        * @return {?}
        */
        function (key) {
          return key in state.entities;
        }).map(
        /**
        * @param {?} key
        * @return {?}
        */
        function (key) {
          return delete state.entities[key];
        }).length > 0;

        if (didMutate) {
          state.ids = state.ids.filter(
          /**
          * @param {?} id
          * @return {?}
          */
          function (id) {
            return id in state.entities;
          });
        }

        return didMutate ? DidMutate.Both : DidMutate.None;
      }
      /**
       * @template S
       * @param {?} state
       * @return {?}
       */


      function removeAll(state) {
        return Object.assign({}, state, {
          ids: [],
          entities: {}
        });
      }
      /**
       * @param {?} keys
       * @param {?} update
       * @param {?} state
       * @return {?}
       */


      function takeNewKey(keys, update, state) {
        /** @type {?} */
        var original = state.entities[update.id];
        /** @type {?} */

        var updated = Object.assign({}, original, update.changes);
        /** @type {?} */

        var newKey = selectIdValue(updated, selectId);
        /** @type {?} */

        var hasNewKey = newKey !== update.id;

        if (hasNewKey) {
          keys[update.id] = newKey;
          delete state.entities[update.id];
        }

        state.entities[newKey] = updated;
        return hasNewKey;
      }
      /**
       * @param {?} update
       * @param {?} state
       * @return {?}
       */


      function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
      }
      /**
       * @param {?} updates
       * @param {?} state
       * @return {?}
       */


      function updateManyMutably(updates, state) {
        /** @type {?} */
        var newKeys = {};
        updates = updates.filter(
        /**
        * @param {?} update
        * @return {?}
        */
        function (update) {
          return update.id in state.entities;
        });
        /** @type {?} */

        var didMutateEntities = updates.length > 0;

        if (didMutateEntities) {
          /** @type {?} */
          var didMutateIds = updates.filter(
          /**
          * @param {?} update
          * @return {?}
          */
          function (update) {
            return takeNewKey(newKeys, update, state);
          }).length > 0;

          if (didMutateIds) {
            state.ids = state.ids.map(
            /**
            * @param {?} id
            * @return {?}
            */
            function (id) {
              return newKeys[id] || id;
            });
            return DidMutate.Both;
          } else {
            return DidMutate.EntitiesOnly;
          }
        }

        return DidMutate.None;
      }
      /**
       * @param {?} map
       * @param {?} state
       * @return {?}
       */


      function mapMutably(map, state) {
        /** @type {?} */
        var changes = state.ids.reduce(
        /**
        * @param {?} changes
        * @param {?} id
        * @return {?}
        */
        function (changes, id) {
          /** @type {?} */
          var change = map(state.entities[id]);

          if (change !== state.entities[id]) {
            changes.push({
              id: id,
              changes: change
            });
          }

          return changes;
        }, []);
        /** @type {?} */

        var updates = changes.filter(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref) {
          var id = _ref.id;
          return id in state.entities;
        });
        return updateManyMutably(updates, state);
      }
      /**
       * @param {?} __0
       * @param {?} state
       * @return {?}
       */


      function mapOneMutably(_ref2, state) {
        var map = _ref2.map,
            id = _ref2.id;

        /** @type {?} */
        var entity = state.entities[id];

        if (!entity) {
          return DidMutate.None;
        }
        /** @type {?} */


        var updatedEntity = map(entity);
        return updateOneMutably({
          id: id,
          changes: updatedEntity
        }, state);
      }
      /**
       * @param {?} entity
       * @param {?} state
       * @return {?}
       */


      function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
      }
      /**
       * @param {?} entities
       * @param {?} state
       * @return {?}
       */


      function upsertManyMutably(entities, state) {
        /** @type {?} */
        var added = [];
        /** @type {?} */

        var updated = [];

        var _iterator2 = _createForOfIteratorHelper(entities),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var entity = _step2.value;

            /** @type {?} */
            var id = selectIdValue(entity, selectId);

            if (id in state.entities) {
              updated.push({
                id: id,
                changes: entity
              });
            } else {
              added.push(entity);
            }
          }
          /** @type {?} */

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var didMutateByUpdated = updateManyMutably(updated, state);
        /** @type {?} */

        var didMutateByAdded = addManyMutably(added, state);

        switch (true) {
          case didMutateByAdded === DidMutate.None && didMutateByUpdated === DidMutate.None:
            return DidMutate.None;

          case didMutateByAdded === DidMutate.Both || didMutateByUpdated === DidMutate.Both:
            return DidMutate.Both;

          default:
            return DidMutate.EntitiesOnly;
        }
      }

      return {
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        addAll: createStateOperator(setAllMutably),
        setAll: createStateOperator(setAllMutably),
        setOne: createStateOperator(setOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably),
        map: createStateOperator(mapMutably),
        mapOne: createStateOperator(mapOneMutably)
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/sorted_state_adapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} selectId
     * @param {?} sort
     * @return {?}
     */


    function createSortedStateAdapter(selectId, sort) {
      var _createUnsortedStateA = createUnsortedStateAdapter(selectId),
          removeOne = _createUnsortedStateA.removeOne,
          removeMany = _createUnsortedStateA.removeMany,
          removeAll = _createUnsortedStateA.removeAll;
      /**
       * @param {?} entity
       * @param {?} state
       * @return {?}
       */


      function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
      }
      /**
       * @param {?} newModels
       * @param {?} state
       * @return {?}
       */


      function addManyMutably(newModels, state) {
        /** @type {?} */
        var models = newModels.filter(
        /**
        * @param {?} model
        * @return {?}
        */
        function (model) {
          return !(selectIdValue(model, selectId) in state.entities);
        });

        if (models.length === 0) {
          return DidMutate.None;
        } else {
          merge(models, state);
          return DidMutate.Both;
        }
      }
      /**
       * @param {?} models
       * @param {?} state
       * @return {?}
       */


      function setAllMutably(models, state) {
        state.entities = {};
        state.ids = [];
        addManyMutably(models, state);
        return DidMutate.Both;
      }
      /**
       * @param {?} entity
       * @param {?} state
       * @return {?}
       */


      function setOneMutably(entity, state) {
        /** @type {?} */
        var id = selectIdValue(entity, selectId);

        if (id in state.entities) {
          state.ids = state.ids.filter(
          /**
          * @param {?} val
          * @return {?}
          */
          function (val) {
            return val !== id;
          });
          merge([entity], state);
          return DidMutate.Both;
        } else {
          return addOneMutably(entity, state);
        }
      }
      /**
       * @param {?} update
       * @param {?} state
       * @return {?}
       */


      function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
      }
      /**
       * @param {?} models
       * @param {?} update
       * @param {?} state
       * @return {?}
       */


      function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
          return false;
        }
        /** @type {?} */


        var original = state.entities[update.id];
        /** @type {?} */

        var updated = Object.assign({}, original, update.changes);
        /** @type {?} */

        var newKey = selectIdValue(updated, selectId);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
      }
      /**
       * @param {?} updates
       * @param {?} state
       * @return {?}
       */


      function updateManyMutably(updates, state) {
        /** @type {?} */
        var models = [];
        /** @type {?} */

        var didMutateIds = updates.filter(
        /**
        * @param {?} update
        * @return {?}
        */
        function (update) {
          return takeUpdatedModel(models, update, state);
        }).length > 0;

        if (models.length === 0) {
          return DidMutate.None;
        } else {
          /** @type {?} */
          var originalIds = state.ids;
          /** @type {?} */

          var updatedIndexes = [];
          state.ids = state.ids.filter(
          /**
          * @param {?} id
          * @param {?} index
          * @return {?}
          */
          function (id, index) {
            if (id in state.entities) {
              return true;
            } else {
              updatedIndexes.push(index);
              return false;
            }
          });
          merge(models, state);

          if (!didMutateIds && updatedIndexes.every(
          /**
          * @param {?} i
          * @return {?}
          */
          function (i) {
            return state.ids[i] === originalIds[i];
          })) {
            return DidMutate.EntitiesOnly;
          } else {
            return DidMutate.Both;
          }
        }
      }
      /**
       * @param {?} updatesOrMap
       * @param {?} state
       * @return {?}
       */


      function mapMutably(updatesOrMap, state) {
        /** @type {?} */
        var updates = state.ids.reduce(
        /**
        * @param {?} changes
        * @param {?} id
        * @return {?}
        */
        function (changes, id) {
          /** @type {?} */
          var change = updatesOrMap(state.entities[id]);

          if (change !== state.entities[id]) {
            changes.push({
              id: id,
              changes: change
            });
          }

          return changes;
        }, []);
        return updateManyMutably(updates, state);
      }
      /**
       * @param {?} __0
       * @param {?} state
       * @return {?}
       */


      function mapOneMutably(_ref3, state) {
        var map = _ref3.map,
            id = _ref3.id;

        /** @type {?} */
        var entity = state.entities[id];

        if (!entity) {
          return DidMutate.None;
        }
        /** @type {?} */


        var updatedEntity = map(entity);
        return updateOneMutably({
          id: id,
          changes: updatedEntity
        }, state);
      }
      /**
       * @param {?} entity
       * @param {?} state
       * @return {?}
       */


      function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
      }
      /**
       * @param {?} entities
       * @param {?} state
       * @return {?}
       */


      function upsertManyMutably(entities, state) {
        /** @type {?} */
        var added = [];
        /** @type {?} */

        var updated = [];

        var _iterator3 = _createForOfIteratorHelper(entities),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var entity = _step3.value;

            /** @type {?} */
            var id = selectIdValue(entity, selectId);

            if (id in state.entities) {
              updated.push({
                id: id,
                changes: entity
              });
            } else {
              added.push(entity);
            }
          }
          /** @type {?} */

        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        var didMutateByUpdated = updateManyMutably(updated, state);
        /** @type {?} */

        var didMutateByAdded = addManyMutably(added, state);

        switch (true) {
          case didMutateByAdded === DidMutate.None && didMutateByUpdated === DidMutate.None:
            return DidMutate.None;

          case didMutateByAdded === DidMutate.Both || didMutateByUpdated === DidMutate.Both:
            return DidMutate.Both;

          default:
            return DidMutate.EntitiesOnly;
        }
      }
      /**
       * @param {?} models
       * @param {?} state
       * @return {?}
       */


      function merge(models, state) {
        models.sort(sort);
        /** @type {?} */

        var ids = [];
        /** @type {?} */

        var i = 0;
        /** @type {?} */

        var j = 0;

        while (i < models.length && j < state.ids.length) {
          /** @type {?} */
          var model = models[i];
          /** @type {?} */

          var modelId = selectIdValue(model, selectId);
          /** @type {?} */

          var entityId = state.ids[j];
          /** @type {?} */

          var entity = state.entities[entityId];

          if (sort(model, entity) <= 0) {
            ids.push(modelId);
            i++;
          } else {
            ids.push(entityId);
            j++;
          }
        }

        if (i < models.length) {
          state.ids = ids.concat(models.slice(i).map(selectId));
        } else {
          state.ids = ids.concat(state.ids.slice(j));
        }

        models.forEach(
        /**
        * @param {?} model
        * @param {?} i
        * @return {?}
        */
        function (model, i) {
          state.entities[selectId(model)] = model;
        });
      }

      return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        addAll: createStateOperator(setAllMutably),
        setAll: createStateOperator(setAllMutably),
        setOne: createStateOperator(setOneMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        map: createStateOperator(mapMutably),
        mapOne: createStateOperator(mapOneMutably)
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/create_adapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */


    function createEntityAdapter() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _Object$assign = Object.assign({
        sortComparer: false,
        selectId:
        /**
        * @param {?} instance
        * @return {?}
        */
        function selectId(instance) {
          return instance.id;
        }
      }, options),
          selectId = _Object$assign.selectId,
          sortComparer = _Object$assign.sortComparer;
      /** @type {?} */


      var stateFactory = createInitialStateFactory();
      /** @type {?} */

      var selectorsFactory = createSelectorsFactory();
      /** @type {?} */

      var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
      return Object.assign(Object.assign(Object.assign({
        selectId: selectId,
        sortComparer: sortComparer
      }, stateFactory), selectorsFactory), stateAdapter);
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/models.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     * @template T
     */


    function DictionaryNum() {}
    /**
     * @abstract
     * @template T
     */


    var Dictionary = function Dictionary() {
      _classCallCheck(this, Dictionary);
    };
    /**
     * @record
     * @template T
     */


    function UpdateStr() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function UpdateNum() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function EntityMapOneNum() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function EntityMapOneStr() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function EntityState() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function EntityDefinition() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function EntityStateAdapter() {}

    if (false) {}
    /**
     * @record
     * @template T, V
     */


    function EntitySelectors() {}

    if (false) {}
    /**
     * @record
     * @template T
     */


    function EntityAdapter() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ngrx-entity.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngrx-entity.js.map

    /***/

  },

  /***/
  "./src/app/pages/AdminConfig.ts":
  /*!**************************************!*\
    !*** ./src/app/pages/AdminConfig.ts ***!
    \**************************************/

  /*! exports provided: AdminConfig */

  /***/
  function srcAppPagesAdminConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfig", function () {
      return AdminConfig;
    });
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var AdminConfig = function AdminConfig() {
      _classCallCheck(this, AdminConfig);
    }; // An Example | Delete The Content When Started
    // source api


    AdminConfig.sourceAPI = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].sourceApi; // public static sourceAPI                   = 'http://localhost:8000/';
    // All Application Api

    AdminConfig.loginAPI = AdminConfig.sourceAPI + 'login_check';
    AdminConfig.userAPI = AdminConfig.sourceAPI + 'user'; // Products

    AdminConfig.productsAPI = AdminConfig.sourceAPI + 'allproperties'; // Real Estate

    AdminConfig.allRealEstateAPI = AdminConfig.sourceAPI + 'allRealEstate';
    AdminConfig.getRealEstateAPI = AdminConfig.sourceAPI + 'realEstate';
    AdminConfig.deleteRealEstateAPI = AdminConfig.sourceAPI + 'realEstate'; // Cars

    AdminConfig.allCarsAPI = AdminConfig.sourceAPI + 'allCars';
    AdminConfig.getCarAPI = AdminConfig.sourceAPI + 'car';
    AdminConfig.deleteCarAPI = AdminConfig.sourceAPI + 'cars'; // Devices

    AdminConfig.allDevicesAPI = AdminConfig.sourceAPI + 'allDevices';
    AdminConfig.getDeviceAPI = AdminConfig.sourceAPI + 'device';
    AdminConfig.deleteDeviceAPI = AdminConfig.sourceAPI + 'devices'; // Reports

    AdminConfig.reportsAPI = AdminConfig.sourceAPI + 'reports';
    AdminConfig.reportAPI = AdminConfig.sourceAPI + 'report';
    AdminConfig.deleteReportAPI = AdminConfig.sourceAPI + 'deletereport'; // Chats

    AdminConfig.chatsAPI = AdminConfig.sourceAPI + 'getallchat'; // Statistics

    AdminConfig.statisticsAPI = AdminConfig.sourceAPI + 'statistics'; // Services

    AdminConfig.allServicesAPI = AdminConfig.sourceAPI + 'allservices';
    AdminConfig.servicesAPI = AdminConfig.sourceAPI + 'services'; // Categories

    AdminConfig.categoriesAPI = AdminConfig.sourceAPI + 'categories';
    AdminConfig.categoryAPI = AdminConfig.sourceAPI + 'category'; // Upload

    AdminConfig.generalUploadAPI = AdminConfig.sourceAPI + 'uploadfile';
    /***/
  }
}]);
//# sourceMappingURL=default~cars-cars-module~categories-categories-module~chats-chats-module~devices-devices-module~prod~36d02cfd-es5.js.map