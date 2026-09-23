# KNU Viral Pathogenesis & Vaccine Lab 홈페이지 관리 안내

경북대학교 의과대학 미생물학교실 · 김성준 교수님 연구실(KNU Viral Pathogenesis & Vaccine Lab) 홈페이지입니다.
이 문서는 **컴퓨터를 잘 몰라도** 홈페이지를 직접 고칠 수 있도록 만든 사용설명서예요.

---

## 🧭 한눈에 보는 큰 그림

홈페이지 고치는 과정은 딱 **두 단계**입니다.

1. **수정하기** — 코드를 직접 건드리지 않습니다. 대신 **AI(Codex·Claude 등)에게 한국어로 부탁**하면 AI가 파일을 알아서 고쳐줍니다.
2. **게시하기** — **GitHub Desktop**이라는 프로그램에서 버튼 두 개(Commit → Push)를 누르면 실제 홈페이지에 반영됩니다.

> 여기서 말하는 **AI**는 폴더 안의 파일을 직접 고칠 수 있는 도구를 뜻합니다.
> Codex, Claude Code, Cowork 중 편한 것 아무거나 쓰시면 되고, 아래 예시 문구는 어디에 붙여넣어도 똑같이 동작합니다.

---

## 👀 미리보기 (고치기 전/후 확인)

`index.html` 파일을 마우스로 더블클릭하면 인터넷 창(크롬 등)에서 홈페이지가 열립니다.
수정한 뒤에도 같은 방법으로 열어서 잘 바뀌었는지 눈으로 확인할 수 있어요.
(지도 같은 일부 화면은 인터넷이 연결돼 있어야 보입니다.)

---

## ✍️ 자주 하는 수정 — 그대로 복사해서 AI에 붙여넣으세요

아래 예시의 **굵은 글씨 부분만 실제 내용으로 바꿔서** AI에 붙여넣으면 됩니다.

### 1) 새 논문 추가하기

DOI 하나만 주면 됩니다. 제목·저자·저널·IF는 AI가 찾아서 채웁니다.

```
아래 DOI 논문을 publications-data.js 맨 위에 추가해줘.
https://doi.org/10.xxxx/xxxxx

- 논문 정보(제목·저자·저널·연도)는 DOI에서 찾아서 채워줘.
- IF는 그 논문 출판 당시의 JCR Impact Factor를 찾아서 넣고, 기준연도도 같이 적어줘.
- 저자 표기는 기존 항목들과 같은 형식으로 (SJ Kim 은 굵게, 제1저자 ^, 교신저자 *).
```

여러 편을 한꺼번에 넣을 때는 DOI를 줄바꿈해서 쭉 붙여넣으면 됩니다.

```
아래 DOI 논문들을 publications-data.js 에 추가해줘. 기존 항목들과 같은 형식으로,
출판 당시 JCR IF도 찾아서 넣어줘. 최신순으로 정렬해줘.
https://doi.org/10.xxxx/aaaaa
https://doi.org/10.xxxx/bbbbb
```

> 번호(01, 02 …)와 10편 단위 페이지 나누기는 자동으로 됩니다.
> 제목을 클릭하면 DOI 링크로 원문에 이동합니다.
>
> **이 사이트의 논문 목록 원칙**: Google Scholar 기준으로, **출판 당시 JCR Impact Factor가 10 이상**인 논문만 올려두었습니다.
> 논문 옆에 붙는 `JCR IF 17.7` 같은 뱃지가 그 숫자예요.
> 기준을 바꾸고 싶으면 이렇게 부탁하면 됩니다.
>
> ```
> Google Scholar 프로필(MeQ0ov4AAAAJ)을 보고, 출판 당시 IF 5 이상인 논문을
> 전부 찾아서 publications-data.js 를 다시 만들어줘.
> ```

### 2) 구성원(대학원생) 추가하기

```
members.html 의 "Current Members" 탭 · "Graduate Students & Researchers" 부분에
새 학생 카드를 추가해줘. "We are hiring!" 카드는 그대로 두고 그 앞에 넣어줘.
- 이름: 홍길동 (Gildong Hong)
- 과정: Graduate Student
- 학력/경력: 2026- | Department of Microbiology, KNU
- 관심분야: 바이러스 병인론
- 이메일: hong@knu.ac.kr
```

> 학생 사진을 함께 넣고 싶으면, 사진 파일을 `assets/img` 폴더에 넣은 뒤
> "사진은 assets/img/mem_hong.jpg 를 써줘" 라고 한 줄 덧붙이면 됩니다.
> 학부 인턴은 같은 탭의 "Undergraduate Interns" 부분에 같은 방식으로 추가하면 됩니다.

### 3) 졸업생(Alumni) 칸 만들기

지금은 졸업생 탭이 없습니다. 필요해지면 이렇게 부탁하세요.

```
members.html 에 "Lab Alumni" 탭을 새로 만들어줘. 아래 사람들을 목록으로 넣어줘.
- 홍길동 — Graduate student, KNU (2026.03–2028.02)
```

### 4) 교수님 소개(Principal Investigator) 수정하기

```
members.html 의 "Principal Investigator" 탭에 있는 경력 목록에 아래 내용을 추가해줘.
- 2026.01 – 현재  ○○ 학회 이사
```

### 5) 사진 넣기 (교수님 사진, 구성원 사진)

```
① 사진 파일을 assets/img 폴더에 넣기 (예: pi.jpg)
② AI 에게: "members.html 의 PI 사진을 assets/img/pi.jpg 로 넣어줘. 지금은 SJ 글자만 나와."
```

### 6) 글자·메뉴·문구 바꾸기

```
index.html 첫 화면 소개 문구를 아래 내용으로 바꿔줘.
"우리 연구실은 ○○○ 을 연구합니다..."
```

```
about.html 의 Research Focus 목록에 아래 항목을 하나 더 추가해줘.
- ○○○ — △△△에 대한 연구
```

```
연락처(Contact) 페이지의 이메일을 새 주소로 바꿔줘.
```

### 7) 색상 바꾸기

```
사이트 전체 강조 색을 지금의 곤색에서 조금 더 밝은 남색 계열로 바꿔줘.
styles.css 맨 위 :root 의 색상 값만 조정하면 돼.
```

> 현재 색은 곤색 계열입니다. `--primary` 곤색(#1b3a63), `--primary-dk` 진한 곤색(#0f2340),
> `--accent` 포인트 황동색(#c0873f), `--hi` 밝은 하늘색(#a9c6ea).

### 8) 페이지 추가/삭제하기

```
News 페이지를 새로 만들어줘. 상단 메뉴 Publications 와 Contact 사이에 넣어주고,
소식은 데이터 파일 하나만 고치면 되도록 만들어줘.
```

> 팁: 무엇을 바꿀지 애매하면 **"○○ 부분을 △△ 하게 바꾸고 싶어. 어떻게 하면 될까?"** 라고 물어봐도 됩니다.
> AI가 방법을 알려주거나 대신 고쳐줍니다.

---

## 🚀 GitHub Desktop으로 실제 홈페이지에 반영하기

AI로 수정을 마쳤으면, 이제 인터넷의 진짜 홈페이지에 올릴 차례입니다.

1. **GitHub Desktop** 프로그램을 엽니다.
2. 왼쪽 **Changes** 탭에 방금 바뀐 파일들이 보입니다. (자동으로 잡힙니다)
3. 왼쪽 아래 **Summary** 칸에 무엇을 바꿨는지 짧게 한 줄 적습니다. 예) `2026년 논문 1편 추가` / `대학원생 추가`
4. 파란색 **Commit to main** 버튼을 누릅니다.
5. 위쪽의 **Push origin**(또는 Push) 버튼을 누릅니다. → 이걸 눌러야 진짜 인터넷에 올라갑니다.
6. 1~2분 뒤 홈페이지 주소를 새로고침하면 반영돼 있습니다.

> ⚠️ **Push origin 을 눌러야** 실제 사이트가 바뀝니다. Commit 만 하면 내 컴퓨터에만 저장됩니다.

---

## 🆘 문제가 생기면

- **뭔가 이상하게 바뀌었다** → AI 에게 "방금 바꾼 것 되돌려줘" 라고 하거나,
  GitHub Desktop 의 바뀐 파일에서 마우스 오른쪽 → **Discard changes**(변경 취소)를 누르면 됩니다.
  (단, 이미 Commit/Push 하기 전이어야 합니다.)
- **논문 목록이 통째로 안 보인다** → 논문 데이터 파일에서 쉼표(,)나 따옴표가 하나 빠지면 목록 전체가 사라집니다.
  AI 에게 "publications-data.js 문법 오류 있는지 확인하고 고쳐줘" 라고 하면 됩니다.
- **화면이 깨져 보인다** → 대개 인터넷 연결 문제이거나 잠깐 기다리면 반영됩니다.
  그래도 이상하면 AI 에게 스크린샷과 함께 물어보세요.

---

## 🌐 홈페이지 주소 만들기 (처음 한 번만)

GitHub 저장소 → **Settings → Pages** →
Source: **Deploy from a branch** / Branch: **main** / **/ (root)** → Save.
잠시 뒤 `https://<계정이름>.github.io/kimsjlab-site/` 에서 사이트가 열립니다.

학교 주소(예: `sjkimlab.knu.ac.kr`)를 쓰고 싶으면 전산원에 **CNAME 레코드**
(`sjkimlab.knu.ac.kr` → `<계정이름>.github.io`) 설정을 요청한 뒤,
Settings → Pages → Custom domain 에 같은 주소를 입력하면 됩니다.
(이 부분은 AI 에게 "커스텀 도메인 설정해줘" 라고 하면 필요한 파일도 만들어줍니다.)

---

## 📁 파일 구조 (참고용 — 몰라도 됩니다)

```
kimsjlab-site/
├─ index.html          # Home (첫 화면)
├─ about.html          # About (연구실 소개 · 연구 분야)
├─ members.html        # Members (교수님 · 구성원)
├─ publications.html   # Publications (논문 목록)
├─ contact.html        # Contact (연락처 · 지도)
└─ assets/
   ├─ css/styles.css           # 전체 디자인 · 색상 (맨 위 :root 에서 색 조정)
   ├─ img/                      # 로고 · 사진 파일 넣는 곳
   │   ├─ symbol.png            #   경북대 심볼 (상단 로고)
   │   └─ favicon.ico           #   브라우저 탭 아이콘
   └─ js/
      ├─ main.js                # 공통 기능 (메뉴 · 페이지 넘김)
      ├─ publications-data.js   # ★ 논문 목록 데이터 (논문은 여기만 고침)
      └─ render-pubs.js         # 논문 화면에 그리는 부분 (건드릴 필요 없음)
```

상단 메뉴는 **Home · About · Members · Publications · Contact** 로 구성되어 있습니다.
**Members** 페이지 안에는 **Principal Investigator**(교수님)와 **Current Members**(구성원) 탭이 있고,
논문은 한 페이지에 10편씩 나뉘어 보입니다.
