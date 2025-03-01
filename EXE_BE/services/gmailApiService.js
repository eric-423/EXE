const { google } = require('googleapis')

async function listoflables(auth) {
    const gmail = google.gmail({ version: 'v1', auth });
    const res = await gmail.users.labels.list({
        userId: 'me',
    });

    const Lables = res.data.labels;
    if (!Lables || Lables.length == 0) {
        console.log('No labels are found!');
        return;
    }
    console.log('Lables:');
    Lables.forEach((label) => {
        console.log(`-${label.name}`);
    });
    return Lables;
}

async function listUnreadEmails(auth) {
    const gmail = google.gmail({ version: 'v1', auth });

    try {
        const res = await gmail.users.messages.list({
            userId: 'me',
            q: 'is:unread', // Tìm kiếm email chưa đọc
        });

        const messages = res.data.messages || [];
        const unreadEmails = [];

        if (messages.length) {
            for (const message of messages) {
                const msg = await gmail.users.messages.get({
                    userId: 'me',
                    id: message.id,
                });

                const headers = msg.data.payload.headers;
                const subjectHeader = headers.find(header => header.name === 'Subject');
                const subject = subjectHeader ? subjectHeader.value : 'No Subject';
                const body = msg.data.snippet;

                unreadEmails.push({
                    id: message.id,
                    subject: subject,
                    body: body,
                });
            }
        } else {
            console.log('No unread messages found.');
        }

        return unreadEmails; // Trả về danh sách email chưa đọc
    } catch (error) {
        console.error('The API returned an error: ' + error);
        return null; // Hoặc có thể trả về một mảng rỗng
    }
}


async function deleteEmail(auth, emailId) {
    const gmail = google.gmail({ version: 'v1', auth });

    try {
        await gmail.users.messages.delete({
            userId: 'me',
            id: emailId,
        });
        console.log(`Email with ID: ${emailId} has been deleted.`);
    } catch (error) {
        console.error('The API returned an error: ' + error);
    }
}

async function markEmailAsSpam(auth, emailId) {
    const gmail = google.gmail({ version: 'v1', auth });

    try {
        await gmail.users.messages.modify({
            userId: 'me',
            id: emailId,
            requestBody: {
                addLabelIds: ['SPAM'],
                removeLabelIds: []
            }
        });
        console.log(`Email with ID: ${emailId} has been marked as spam.`);
    } catch (error) {
        console.error('The API returned an error: ' + error);
    }
}

module.exports = { listoflables, listUnreadEmails, deleteEmail }