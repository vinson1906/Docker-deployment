const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 6500;

app.use(cors());
app.use(express.json());

app.get("/api/get/message", (req, res) => {
    res.json({
        data: "hii He!",
    });
});

app.get("/api/git-account", async (req, res) => {
    try {
        const email = "example@gmail.com";

        const response = await fetch(
            `https://api.github.com/search/commits?q=author-email:${encodeURIComponent(email)}`,
            {
                headers: {
                    Accept: "application/vnd.github+json",
                },
            }
        );

        if (!response.ok) {
            return res.status(response.status).json({
                message: "Failed to search GitHub commits",
            });
        }

        const result = await response.json();

        const users = [
            ...new Map(
                result.items.map((item) => [
                    item.author?.login,
                    item.author,
                ]).filter(([login]) => login)
            ).values(),
        ];

        res.json({
            data: users.map((user) => ({
                username: user.login,
                profile: user.html_url,
                avatar: user.avatar_url,
            })),
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch GitHub account",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
