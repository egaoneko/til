# Track Transform

```javascript
function trackTransforms (ctx) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    var xform = svg.createSVGMatrix();
    ctx.getTransform = function () {
      return xform;
    };

    var savedTransforms = [];
    var save = ctx.save;
    ctx.save = function () {
      savedTransforms.push(xform.translate(0, 0));
      return save.call(ctx);
    };

    var restore = ctx.restore;
    ctx.restore = function () {
      xform = savedTransforms.pop();
      return restore.call(ctx);
    };

    var scale = ctx.scale;
    ctx.scale = function (sx, sy) {
      xform = xform.scaleNonUniform(sx, sy);
      return scale.call(ctx, sx, sy);
    };

    var rotate = ctx.rotate;
    ctx.rotate = function (radians) {
      xform = xform.rotate(radians * 180 / Math.PI);
      return rotate.call(ctx, radians);
    };

    var translate = ctx.translate;
    ctx.translate = function (dx, dy) {
      xform = xform.translate(dx, dy);
      return translate.call(ctx, dx, dy);
    };

    var transform = ctx.transform;
    ctx.transform = function (a, b, c, d, e, f) {
      var m2 = svg.createSVGMatrix();
      m2.a = a;
      m2.b = b;
      m2.c = c;
      m2.d = d;
      m2.e = e;
      m2.f = f;
      xform = xform.multiply(m2);
      return transform.call(ctx, a, b, c, d, e, f);
    };

    var setTransform = ctx.setTransform;
    ctx.setTransform = function (a, b, c, d, e, f) {
      xform.a = a;
      xform.b = b;
      xform.c = c;
      xform.d = d;
      xform.e = e;
      xform.f = f;
      return setTransform.call(ctx, a, b, c, d, e, f);
    };
    ctx.setTransformByContext = function (context) {
      var m2 = context.getTransform();
      xform.a = m2.a;
      xform.b = m2.b;
      xform.c = m2.c;
      xform.d = m2.d;
      xform.e = m2.e;
      xform.f = m2.f;
      return setTransform.call(ctx, m2.a, m2.b, m2.c, m2.d, m2.e, m2.f);
    };

    var pt = svg.createSVGPoint();
    ctx.transformedPoint = function (x, y) {
      pt.x = x;
      pt.y = y;
      return pt.matrixTransform(xform.inverse());
    };

    var clearRect = ctx.clearRect;
    ctx.clearRect = function (x, y, w, h) {
      var p1 = ctx.transformedPoint(x, y);
      var p2 = ctx.transformedPoint(w, h);
      return clearRect.call(ctx, p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
    };

    ctx.zoom = function (scale, x, y) {
      var pt = ctx.transformedPoint(x, y);
      ctx.translate(pt.x, pt.y);
      ctx.scale(scale, scale);
      ctx.translate(-pt.x, -pt.y);
    };
}
```