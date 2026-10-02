import test from 'node:test';
import assert from 'node:assert/strict';
import { readDraft, writeDraft, clearDraft } from '../src/utils/exerciseDraft.js';
import { materialPath } from '../src/utils/materials.js';

test('restores only answers belonging to the current exercise and its alternatives', () => {
  const data = new Map();
  const storage = {
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => data.set(key, value),
    removeItem: (key) => data.delete(key),
  };
  const questions = [{ alternatives: ['a', 'b'] }, { alternatives: ['c', 'd'] }];
  writeDraft(storage, 'attempt-1', { 0: 'a', 1: 'fake' });
  assert.deepEqual(readDraft(storage, 'attempt-1', questions), { 0: 'a' });
  assert.deepEqual(readDraft(storage, 'attempt-2', questions), {});
  clearDraft(storage, 'attempt-1');
  assert.deepEqual(readDraft(storage, 'attempt-1', questions), {});
});

test('links each supported practice topic to its lesson', () => {
  assert.equal(materialPath('Present Perfect'), '/materials/3');
  assert.equal(materialPath('Simple Past'), '/materials/1');
  assert.equal(materialPath('Unknown'), '/materials');
});
