const hexagrams = [
    { name: "건(乾)", symbol: "☰<br>☰", description: "하늘을 상징. 창조, 시작, 강건함, 아버지를 의미합니다. 모든 일이 순조롭게 진행될 시기입니다.", keywords: ["시작", "창조", "리더", "성공", "강함"] },
    { name: "곤(坤)", symbol: "☷<br>☷", description: "땅을 상징. 수용, 안정, 어머니, 부드러움을 의미합니다. 겸손한 자세로 기다리면 좋은 결과를 얻을 것입니다.", keywords: ["수용", "안정", "어머니", "기다림", "결실"] },
    { name: "수뢰둔(水雷屯)", symbol: "屯", description: "어려움 속의 시작. 처음에는 어려움이 따르지만, 인내하고 노력하면 극복할 수 있습니다.", keywords: ["어려움", "고난", "인내", "새싹"] },
    { name: "산수몽(山水蒙)", symbol: "蒙", description: "어리고 어두움. 아직 미숙하고 방향을 제대로 알지 못하는 상태입니다. 스승이나 조언자의 도움이 필요합니다.", keywords: ["미숙", "배움", "교육", "혼란"] },
    { name: "수천수(水天需)", symbol: "需", description: "기다림의 지혜. 때가 오기를 기다려야 하는 상황입니다. 조급해하지 말고 준비하며 기다리는 것이 중요합니다.", keywords: ["기다림", "준비", "음식", "잔치"] },
    { name: "천수송(天水訟)", symbol: "訟", description: "다툼과 갈등. 다른 사람과 의견 충돌이 생길 수 있습니다. 소송이나 큰 다툼은 피하는 것이 좋습니다.", keywords: ["다툼", "갈등", "소송", "불화"] },
    { name: "지수사(地水師)", symbol: "師", description: "군대와 전쟁. 많은 사람을 이끌고 목표를 향해 나아가야 하는 상황입니다. 리더십과 전략이 중요합니다.", keywords: ["리더십", "조직", "전쟁", "목표"] },
    { name: "수지비(水地比)", symbol: "比", description: "화합과 협력. 주변 사람들과 힘을 합치면 좋은 결과를 얻을 수 있습니다. 친목과 협동이 중요합니다.", keywords: ["화합", "협력", "친목", "관계"] }
];

const storyInput = document.getElementById('story-input');
const getFortuneBtn = document.getElementById('get-fortune-btn');
const resultSection = document.getElementById('result-section');
const gwaeName = document.getElementById('괘-name');
const hexagramDiv = document.getElementById('hexagram');
const gwaeDescription = document.getElementById('괘-description');

getFortuneBtn.addEventListener('click', () => {
    const story = storyInput.value;
    if (!story) {
        alert("당신의 이야기를 들려주세요.");
        return;
    }

    const matchedGwae = findBestMatch(story);

    gwaeName.textContent = matchedGwae.name;
    hexagramDiv.innerHTML = matchedGwae.symbol;
    gwaeDescription.textContent = matchedGwae.description;

    resultSection.classList.remove('hidden');
});

function findBestMatch(story) {
    let bestMatch = { score: -1, gwae: null };

    for (const gwae of hexagrams) {
        let score = 0;
        for (const keyword of gwae.keywords) {
            if (story.includes(keyword)) {
                score++;
            }
        }

        if (score > bestMatch.score) {
            bestMatch = { score, gwae };
        }
    }

    return bestMatch.gwae || hexagrams[Math.floor(Math.random() * hexagrams.length)];
}
