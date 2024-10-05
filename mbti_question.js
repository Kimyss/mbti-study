const handleClickMBTI = () => {

  const questions = [
    [
      "나는 활발하다",
      "처음 보는 사람과 쉽게 친해진다.",
      "친구들이 나를 빼놓고 놀면 섭섭하다."
    ],  // true 면 E  false 면 I
    [
      "나는 현실적이라는 소리를 많이 듣는다",
      "숲 보다는 나무를 보는 편이다",
      "미래에 일어날 일에 대해 상상하기 보다는 이미 일어난 것을 토대로 미래를 예측하는 것을 좋아한다"
    ],   // true 면 S  false 면 N
    [
      "친구가 고민상담을 하면 위로보다는 현실적인 조언을 통해 친구가 빨리 일을 해결할 수 있게끔 한다",
      "친구가 사고가 났다고  카톡이 왔다.\"괜찮니?\"가 아니라 \"어디서 어쩌다? 니 과실이야?\"라고 한다.",
      "친구가 기분나빠할 까봐 쓴소리를 돌려말하기 보다는 직설적으로 얘기하는 편이다"
    ],   // true 면 T  false 면 F
    ["내일은 없다, 오늘이 중요하다",
      "계획하는 것을 싫어한다",
      "먹을 걸 정할 때, 2차는 어디로.. 만약 여기 닫으면 어디로.. b플랜 c플랜까지 짠다."
    ]   // true 면 P  false 면 J
  ]
  // IE SN TF PJ

  let E = 0;
  let I = 0;  //어차피 모두 0으로 변수초기화 시킬거기에 밑에처럼 표현해도 가능
  let S = N = T = F = P = 0;  //다수의 변수를 동일한 초기값으로 선언할 때 사용(let I =0 , let E = 0....)
  let J = 0;  //for문 안의  소문자 j 와 약간의 혼돈(?)을 하는 것 같음

  /*  위 questions은 다차원배열(배열 안에 배열들이 포함되어 있는 구조)
       다차원배열을 이중 for문으로 반복하여 결론도출 요망  */
  /*  confirm() :  둘중 하나 선택받는 내장함수 */

  for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < questions[i].length; j++) {
      const result = confirm(questions[i][j]);

      if (i == 0) {
        result ? E++ : I++;
      } else if (i == 1) {
        result ? S++ : N++;
      } else if (i == 2) {
        result ? T++ : F++;
      } else {
        result ? P++ : J++;
      }
    }
  }

  let MBTI = "";

  I < E ? MBTI = MBTI + "E" : MBTI = MBTI + "I";
  S < N ? MBTI += "N" : MBTI += "S";
  T < F ? MBTI += "F" : MBTI += "T";
  P < J ? MBTI += "J" : MBTI += "P";

  alert(`🙂 당신의 MBTI는 ${MBTI} 입니다! 🙃`);

}