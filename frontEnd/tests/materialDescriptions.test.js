import test from 'node:test';
import assert from 'node:assert/strict';
import { materialDescription, unitDescription } from '../src/utils/materialDescriptions.js';

test('replaces every seeded placeholder with a useful Spanish description', () => {
  for (let id = 1; id <= 12; id += 1) {
    const description = materialDescription({ id, descripcion: `Description for topic ${id}.` });
    assert.ok(description.length > 35);
    assert.doesNotMatch(description, /Description for/i);
  }
  assert.match(unitDescription({ id: 1, descripcion: 'Describe actions that happened in the past.' }), /pasado/);
});

test('preserves descriptions edited in the database', () => {
  assert.equal(materialDescription({ id: 1, descripcion: 'Texto propio del docente.' }), 'Texto propio del docente.');
  assert.equal(unitDescription({ id: 1, descripcion: 'Unidad personalizada.' }), 'Unidad personalizada.');
});
