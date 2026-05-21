
const teachers = [
    {
        name: "أ. أحمد محمد",
        subject: "مدرس أحياء",
        image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "أ. محمود علي",
        subject: "مدرس كيمياء",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "أ. يوسف خالد",
        subject: "مدرس فيزياء",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "أ. عمر حسن",
        subject: "مدرس رياضيات",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "أ. كريم سامي",
        subject: "مدرس لغة عربية",
        image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "أ. مصطفى جمال",
        subject: "مدرس إنجليزي",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
];

const subjectsData = [
    {
        name: "أحياء",
        icon: "🧬",
        desc: "الخلايا، الكائنات الحية، والأنظمة الحيوية",
        image:
            "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "كيمياء",
        icon: "⚗️",
        desc: "التفاعلات، المعادلات، والتجارب الكيميائية",
        image:
            "https://images.unsplash.com/photo-1532634993-15f421e42ec0?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "فيزياء",
        icon: "⚛️",
        desc: "الطاقة، الحركة، والقوانين الفيزيائية",
        image:
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "رياضيات",
        icon: "➗",
        desc: "معادلات، هندسة، وتفكير منطقي",
        image:
            "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "عربي",
        icon: "📚",
        desc: "النصوص، البلاغة، والقواعد",
        image:
            "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "إنجليزي",
        icon: "🔤",
        desc: "القواعد، القراءة، والمفردات",
        image:
            "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "تاريخ",
        icon: "🏛️",
        desc: "الأحداث التاريخية والحضارات القديمة",
        image:
            "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=700&q=80",
    },
    {
        name: "جغرافيا",
        icon: "🌍",
        desc: "الخرائط، التضاريس، والظواهر الطبيعية",
        image:
            "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=700&q=80",
    },
];

const teachersTrack = document.getElementById("teachersTrack");
const subjectsTrack = document.getElementById("subjectsTrack");

function createTeacherCard(teacher) {
    const card = document.createElement("article");
    card.className = "teacher-card";
    card.innerHTML = `
    <img src="${teacher.image}" alt="${teacher.name}" loading="lazy" />
    <div class="teacher-info">
        <h3>${teacher.name}</h3>
        <p>${teacher.subject}</p>
    </div>
    `;
    return card;
}

function createSubjectCard(subject) {
    const card = document.createElement("article");
    card.className = "subject-science-card";
    card.innerHTML = `
    <img src="${subject.image}" alt="${subject.name}" loading="lazy" />
    <div class="subject-overlay"></div>
    <div class="subject-info">
        <div class="subject-badge">${subject.icon}</div>
        <h3>${subject.name}</h3>
        <p>${subject.desc}</p>
    </div>
    `;
    return card;
}

if (subjectsTrack) {
    [...subjectsData].forEach((subject) => {
        subjectsTrack.appendChild(createSubjectCard(subject));
    });
}

if (teachersTrack) {
    [...teachers, ...teachers].forEach((teacher) => {
        teachersTrack.appendChild(createTeacherCard(teacher));
    });
}
