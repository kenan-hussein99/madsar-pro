self.addEventListener("push", async (event) => {
    const { title, body } = await event.data.json();
    await self.registration.showNotification(title, {
        body,
    });
});
