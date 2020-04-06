import { INodeEdge } from '../../../types';

export const edges: INodeEdge[] = [
  {
    id: 15,
    depth: 1,
    type: 'ref',
    fromBranchNodeId: 869,
    fromBranchNodeName: 'Get Todo',
    fromBranchNodeType: 'http_operation',
    fromBranchNodeUri: '/reference/todos/openapi.v1.json/paths/~1todos~1{todoId}/get',
    fromBranchNodePath: '#/responses/200/schema',
    fromBranchNodeVersion: '1',
    toBranchNodeId: 861,
    toBranchNodeName: 'Todo Full',
    toBranchNodeType: 'model',
    toBranchNodeUri: '/reference/todos/models/todo-full.v1.json',
    toBranchNodePath: '#/',
    toBranchNodeVersion: '1',
  },
  {
    id: 18,
    depth: 1,
    type: 'ref',
    fromBranchNodeId: 870,
    fromBranchNodeName: 'Update Todo',
    fromBranchNodeType: 'http_operation',
    fromBranchNodeUri: '/reference/todos/openapi.v1.json/paths/~1todos~1{todoId}/put',
    fromBranchNodePath: '#/responses/200/schema',
    fromBranchNodeVersion: '1',
    toBranchNodeId: 861,
    toBranchNodeName: 'Todo Full',
    toBranchNodeType: 'model',
    toBranchNodeUri: '/reference/todos/models/todo-full.v1.json',
    toBranchNodePath: '#/',
    toBranchNodeVersion: '1',
  },
  {
    id: 22,
    depth: 1,
    type: 'ref',
    fromBranchNodeId: 872,
    fromBranchNodeName: 'Create Todo',
    fromBranchNodeType: 'http_operation',
    fromBranchNodeUri: '/reference/todos/openapi.v1.json/paths/~1todos/post',
    fromBranchNodePath: '#/responses/201/schema',
    fromBranchNodeVersion: '1',
    toBranchNodeId: 861,
    toBranchNodeName: 'Todo Full',
    toBranchNodeType: 'model',
    toBranchNodeUri: '/reference/todos/models/todo-full.v1.json',
    toBranchNodePath: '#/',
    toBranchNodeVersion: '1',
  },
  {
    id: 24,
    depth: 1,
    type: 'ref',
    fromBranchNodeId: 873,
    fromBranchNodeName: 'List Todos',
    fromBranchNodeType: 'http_operation',
    fromBranchNodeUri: '/reference/todos/openapi.v1.json/paths/~1todos/get',
    fromBranchNodePath: '#/responses/200/schema/items',
    fromBranchNodeVersion: '1',
    toBranchNodeId: 861,
    toBranchNodeName: 'Todo Full',
    toBranchNodeType: 'model',
    toBranchNodeUri: '/reference/todos/models/todo-full.v1.json',
    toBranchNodePath: '#/',
    toBranchNodeVersion: '1',
  },
];
