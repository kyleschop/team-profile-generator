function generateHTML(allAnswers) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Team Generator</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main class="content">
        <section class="card" id="card">
            <section class="cards">
                <section>
                    <section class="cardHeader" id="cardHeader">
                        <h2>${allAnswers[0].managerName}</h2>
                        <h3>Manager</h3>
                    </section>
                    <p>ID: ${allAnswers[0].managerID}</p>
                    <a href="mailto:${allAnswers[0].managerEmail}">Email: ${allAnswers[0].managerEmail}</a>
                    <p>Office number: ${allAnswers[0].managerOfficeNumber}</p>
                </section>
            </section>
            <section class="cards">
                <section>
                    <section class="cardHeader" id="cardHeader">
                        <h2>${allAnswers[1].engineerName}</h2>
                        <h3>Engineer</h3>
                    </section>
                    <p>ID: ${allAnswers[1].engineerID}</p>
                    <a href="mailto:${allAnswers[1].engineerEmail}">Email: ${allAnswers[1].engineerEmail}</a>
                    <a href="https://github.com/${allAnswers[1].engineerGithub}" target="_blank">GitHub: ${allAnswers[1].engineerGithub}</a>
                </section>
            </section>
            <section class="cards">
                <section>
                     <section class="cardHeader" id="cardHeader">
                        <h2>${allAnswers[2].internName}</h2>
                         <h3>Intern</h3>
                    </section>
                    <p>ID: ${allAnswers[2].internID}</p>
                    <a href="mailto:${allAnswers[2].internEmail}">Email: ${allAnswers[2].internEmail}</a>
                     <p>School: ${allAnswers[2].internSchool}</p>
                    </section>
                </section>
        </section>
    </main>
    
</body>
    
</html>`;
};

module.exports = generateHTML;