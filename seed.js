const { Company, Job } = require('./models');

const seed = async () => {
  try {
    const company1 = await Company.create({
      name: "Ex. Company 1",
      location: "New York, NY",
      about: "There isn't a rule. You just practice and find out which way works best for you. In life you need colors. If I paint something, I don't want to have to explain what it is. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. But we're not there yet, so we don't need to worry about it. Play with the angles.",
      link: "https://www.google.com",
    });

    const company2 = await Company.create({
      name: "Ex. Company 2",
      location: "New York, NY",
      about: "There isn't a rule. You just practice and find out which way works best for you. In life you need colors. If I paint something, I don't want to have to explain what it is. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. But we're not there yet, so we don't need to worry about it. Play with the angles.",
      link: "https://www.google.com",
    });

    const company3 = await Company.create({
      name: "Ex. Company 3",
      location: "Boston, MA",
      about: "There isn't a rule. You just practice and find out which way works best for you. In life you need colors. If I paint something, I don't want to have to explain what it is. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. But we're not there yet, so we don't need to worry about it. Play with the angles.",
      link: "https://www.google.com",
    });

    const company4 = await Company.create({
      name: "Ex. Company 4",
      location: "Boston, MA",
      about: "There isn't a rule. You just practice and find out which way works best for you. In life you need colors. If I paint something, I don't want to have to explain what it is. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. But we're not there yet, so we don't need to worry about it. Play with the angles.",
      link: "https://www.google.com",
    });

    const company5 = await Company.create({
      name: "Ex. Company 5",
      location: "Denver, CO",
      about: "There isn't a rule. You just practice and find out which way works best for you. In life you need colors. If I paint something, I don't want to have to explain what it is. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. But we're not there yet, so we don't need to worry about it. Play with the angles.",
      link: "https://www.google.com",
    });

    const job1 = await Job.create({
      job_title: "Software Engineer",
      description: "I thought today we would make a happy little stream that's just running through the woods here. A little happy sunlight shining through there. You have to make those little noises or it won't work. A fan brush can be your best friend. The man who does the best job is the one who is happy at his job. Everyone wants to enjoy the good parts - but you have to build the framework first. You're meant to have fun in life. Working it up and down, back and forth. Let all these things just sort of happen. That is when you can experience true joy, when you have no fear. This is your world. A happy cloud. Now then, let's play. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone.",
      employee_status: "Full Time",
      salary: 80000,
      experience_level: "Junior",
    });

    const job2 = await Job.create({
      job_title: "Web Developer",
      description: "I thought today we would make a happy little stream that's just running through the woods here. A little happy sunlight shining through there. You have to make those little noises or it won't work. A fan brush can be your best friend. The man who does the best job is the one who is happy at his job. Everyone wants to enjoy the good parts - but you have to build the framework first. You're meant to have fun in life. Working it up and down, back and forth. Let all these things just sort of happen. That is when you can experience true joy, when you have no fear. This is your world. A happy cloud. Now then, let's play. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone.",
      employee_status: "Full Time",
      salary: 75000,
      experience_level: "Junior",
    });

    const job3 = await Job.create({
      job_title: "Web Developer",
      description: "I thought today we would make a happy little stream that's just running through the woods here. A little happy sunlight shining through there. You have to make those little noises or it won't work. A fan brush can be your best friend. The man who does the best job is the one who is happy at his job. Everyone wants to enjoy the good parts - but you have to build the framework first. You're meant to have fun in life. Working it up and down, back and forth. Let all these things just sort of happen. That is when you can experience true joy, when you have no fear. This is your world. A happy cloud. Now then, let's play. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone.",
      employee_status: "Full Time",
      salary: 120000,
      experience_level: "Senior",
    });

    const job4 = await Job.create({
      job_title: "Software Engineer",
      description: "I thought today we would make a happy little stream that's just running through the woods here. A little happy sunlight shining through there. You have to make those little noises or it won't work. A fan brush can be your best friend. The man who does the best job is the one who is happy at his job. Everyone wants to enjoy the good parts - but you have to build the framework first. You're meant to have fun in life. Working it up and down, back and forth. Let all these things just sort of happen. That is when you can experience true joy, when you have no fear. This is your world. A happy cloud. Now then, let's play. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone.",
      employee_status: "Full Time",
      salary: 130000,
      experience_level: "Senior",
    });

    const job5 = await Job.create({
      job_title: "Software Engineer",
      description: "I thought today we would make a happy little stream that's just running through the woods here. A little happy sunlight shining through there. You have to make those little noises or it won't work. A fan brush can be your best friend. The man who does the best job is the one who is happy at his job. Everyone wants to enjoy the good parts - but you have to build the framework first. You're meant to have fun in life. Working it up and down, back and forth. Let all these things just sort of happen. That is when you can experience true joy, when you have no fear. This is your world. A happy cloud. Now then, let's play. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone.",
      employee_status: "Full Time",
      salary: 80000,
      experience_level: "Junior",
    });

    const job6 = await Job.create({
      job_title: "Web Developer",
      description: "I thought today we would make a happy little stream that's just running through the woods here. A little happy sunlight shining through there. You have to make those little noises or it won't work. A fan brush can be your best friend. The man who does the best job is the one who is happy at his job. Everyone wants to enjoy the good parts - but you have to build the framework first. You're meant to have fun in life. Working it up and down, back and forth. Let all these things just sort of happen. That is when you can experience true joy, when you have no fear. This is your world. A happy cloud. Now then, let's play. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone.",
      employee_status: "Full Time",
      salary: 80000,
      experience_level: "Mid-Level",
    });

    const job7 = await Job.create({
      job_title: "Software Engineer",
      description: "I thought today we would make a happy little stream that's just running through the woods here. A little happy sunlight shining through there. You have to make those little noises or it won't work. A fan brush can be your best friend. The man who does the best job is the one who is happy at his job. Everyone wants to enjoy the good parts - but you have to build the framework first. You're meant to have fun in life. Working it up and down, back and forth. Let all these things just sort of happen. That is when you can experience true joy, when you have no fear. This is your world. A happy cloud. Now then, let's play. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone.",
      employee_status: "Full Time",
      salary: 100000,
      experience_level: "Mid-Level",
    });

    const job8 = await Job.create({
      job_title: "Web Developer",
      description: "I thought today we would make a happy little stream that's just running through the woods here. A little happy sunlight shining through there. You have to make those little noises or it won't work. A fan brush can be your best friend. The man who does the best job is the one who is happy at his job. Everyone wants to enjoy the good parts - but you have to build the framework first. You're meant to have fun in life. Working it up and down, back and forth. Let all these things just sort of happen. That is when you can experience true joy, when you have no fear. This is your world. A happy cloud. Now then, let's play. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone.",
      employee_status: "Full Time",
      salary: 70000,
      experience_level: "Junior",
    });

    const job9 = await Job.create({
      job_title: "Web Developer",
      description: "I thought today we would make a happy little stream that's just running through the woods here. A little happy sunlight shining through there. You have to make those little noises or it won't work. A fan brush can be your best friend. The man who does the best job is the one who is happy at his job. Everyone wants to enjoy the good parts - but you have to build the framework first. You're meant to have fun in life. Working it up and down, back and forth. Let all these things just sort of happen. That is when you can experience true joy, when you have no fear. This is your world. A happy cloud. Now then, let's play. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone.",
      employee_status: "Full Time",
      salary: 65000,
      experience_level: "Junior",
    });

    const job10 = await Job.create({
      job_title: "Software Engineer",
      description: "I thought today we would make a happy little stream that's just running through the woods here. A little happy sunlight shining through there. You have to make those little noises or it won't work. A fan brush can be your best friend. The man who does the best job is the one who is happy at his job. Everyone wants to enjoy the good parts - but you have to build the framework first. You're meant to have fun in life. Working it up and down, back and forth. Let all these things just sort of happen. That is when you can experience true joy, when you have no fear. This is your world. A happy cloud. Now then, let's play. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone.",
      employee_status: "Full Time",
      salary: 70000,
      experience_level: "Junior",
    });

    await company1.setJobs([job1, job4]);
    await company2.setJobs([job2, job6]);
    await company3.setJobs([job3, job7]);
    await company4.setJobs([job8, job10]);
    await company5.setJobs([job5, job9]);

    process.exit();
    
  } catch(e) {
    console.error(e);
  }
}

seed();
