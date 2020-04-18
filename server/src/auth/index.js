const auth = (next) => (root, args, ctx, info) => {
  if (!ctx.user) {
    throw new Error("no Auth");
  }

  return next(root, args, ctx, info);
};

module.exports = auth;
