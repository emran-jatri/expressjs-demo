const User = require("../../models/user/userModel");
// imports end

module.exports.getAll = async (req, res) => {
  const options = {
    page: req?.query?.page ?? 1,
    limit: req?.query?.limit ?? 10,
  };
  console.log(options);
  await User.paginate({}, options)
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

module.exports.create = (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then((user) =>
      res.status(200).json({
        message: "User created successfully",
        data: user,
      })
    )
    .catch((error) =>
      res.status(500).json({
        error,
      })
    );
};
