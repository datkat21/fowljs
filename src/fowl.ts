// FowlJS
import { getManager } from "./func/init";
import { Music } from "./class/audio/music";
import { Sound } from "./class/audio/sound";
import { Font } from "./class/drawing/font";
import { Group } from "./class/drawing/group";
import { LineShape } from "./class/drawing/line";
import { OutlinedRectangleShape } from "./class/drawing/outlinedRectangle";
import { OutlinedTextLabel } from "./class/drawing/outlineText";
import { RectangleShape } from "./class/drawing/rectangle";
import { SlicedSprite } from "./class/drawing/slicedSprite";
import { Sprite } from "./class/drawing/sprite";
import { TextLabel } from "./class/drawing/text";
import { TileMap } from "./class/drawing/tileMap";
import { Point } from "./class/position/point";
import { Rect } from "./class/position/rect";
import { BaseState } from "./class/state/baseState";
import { StateManager } from "./class/state/stateManager";
import { canvas as getCanvas } from "./const/canvas";
import { CollisionSides } from "./const/collisionSides";
import { colors } from "./const/colors";
import { type Controller, controller } from "./const/controller";
import { getCollision, getCollisionSide } from "./func/collision";
import { getKeys, getMouseKeys } from "./func/getKeys";
import { startGame } from "./func/startGame";
import { type BaseObject, type BaseObjectPos } from "./type/object";
import { Camera } from "./class/drawing/camera";

declare global {
  interface Window {
    ctx: CanvasRenderingContext2D;
    controller: Controller;
    manager: StateManager;
  }
}

// Exports
export {
  Music,
  Sound,
  Camera,
  Font,
  Group,
  LineShape,
  OutlinedRectangleShape,
  OutlinedTextLabel,
  RectangleShape,
  SlicedSprite,
  Sprite,
  TextLabel,
  TileMap,
  Point,
  Rect,
  BaseState,
  StateManager,
  getCanvas,
  getManager,
  CollisionSides,
  colors,
  type Controller,
  controller,
  getCollision,
  getCollisionSide,
  getKeys,
  getMouseKeys,
  startGame,
  type BaseObject,
  type BaseObjectPos,
};
