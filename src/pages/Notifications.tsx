import styled from "styled-components";
import Layout from "../template/Layout/Layout";
import OneNotific from "../components/notifications/OneNotific";

const ContentAllNotific = styled.div`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); /* Shadow effect */
  background-color: ${(props) => props.theme.colors.block};
`;

const Filter = styled.div`
  background-color: ${(props) => props.theme.colors.block};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.border};
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px 10px;
  border-radius: 10px;
  div {
    text-transform:capitalize;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.border};
    border-radius: 25px;
    padding: 10px 20px;
    &:hover{
      background-color: ${(props) => props.theme.colors.background};
      cursor:pointer;
      transition:all .2s ease-in-out;
    }
  }
`;

const MainNotification = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Notifications = () => {
  const notific = [
    {
      id: "1",
      image: "/src/assets/avatar.png",
      time: "now",
      title:
        "Information Technology Institute (ITI) posted: تحدي يوم 23 رمضان من تحديات #مهارة_تك .. كل يوم فائز جديد بقسيمة شراء من جوميا بقيمة 1000 جنية! 🤩 التحدي النهاردة هيكون في مجال الحوسبة السحابية (#CloudComputing)، علشان تشوف أسئلة التحدي وتجاوب عليها من خلال اللينك ده: https://bit.ly/3Ph25Hk وعلشان نساعدك تحل كل الأسئلة صح جمعنالك أهم الدورات التدريبية والكلمات المهنية الموجودة على موقع مهارة تك في مجال الحوسبة السحابية (Cloud Computing): 🔸دورات تدريبية مقدمة في مجال الحوسبة السحابية (Cloud Computing) على مهارة تك: ◀️أمن الحوسبة السحابية: https://bit.ly/3VNKWt3 🔸كلمات مهنية مقدمة من مجموعة من الخبراء في مجال الحوسبة السحابية (Cloud Computing) على مهارة تك: ◀️مقدمة عن الحوسبة السحابية و خريطة لوظائف المجال: https://bit.ly/3J3XLHY متنساش تعمل منشن لصاحبك المتميز في مجال الحوسبة السحابية (Cloud Computing) وتخليه يشارك في تحدي النهاردة. 😉 ⚠ شروط وأحكام المسابقة: 1- يجب أن يكون للمشارك حساب فعّال على منصة مهارة تك للتمكن من المشاركة في المسابقة وحل الأسئلة. 2-مدة المسابقة من الساعة 6 نصف مساءاً وحتى الساعة 12 ظهر اليوم التالي. 3- الإجابة على المسابقة فقط من خلال الرابط الخاص بمسابقة اليوم والمرفق بها عبر صفحاتنا على مواقع التواصل الإجتماعي المختلفة. 4- احرص على الإجابة خلال المدة الزمنية المحددة للأسئلة والمرفقة بها بعد ضغط زر البدء. 5- يدخل السحب على الجائزة اليومية كل من أتم الإجابة الصحيحة على الأسئلة كاملة. 6- يتم اختيار الفائز يومياً من خلال قرعة إلكترونية. 7- يتم الإعلان عن اسم الفائز يومياً عبر صفحاتنا على مواقع التواصل الإجتماعي المختلفة الساعة 6 ونصف مساءاً كل يوم. 8- يربح الفائز في المسابقة قسيمة شراء قيمتها 1000 جنيه مصري من جوميا. 9- قيمة الجائزة غير قابلة للاستراد النقدي. 10- على الفائز أن يقوم بالرد على البريد الإلكتروني الخاص بإعلان الجائزة في موعد أقصاه 24 ساعة من استلام البريد، وإلا سوف نقوم بتسليم الجائزة لفائز آخر. #تعلّم_مع_مهارة_تك #MCIT #ITI #MahraTech ",
    },
    {
      id: "2",
      image: "/src/assets/background.png",
      time: "8:45 PM",

      title:
        " profile People are reacting to Esraa Mahmoud’s post: Hi everyone - I am looking for a new role as Mid Php / Laravel Developer and would appreciate your support. Thank you in advance for any connections, advice, or opportunities you can offer. #OpenToWork ",
    },
    {
      id: "3",
      image: "/src/assets/avatar.png",
      time: "10:05 PM",
      title:
        "Information Technology Institute (ITI) posted: تحدي يوم 23 رمضان من تحديات #مهارة_تك .. كل يوم فائز جديد بقسيمة شراء من جوميا بقيمة 1000 جنية! 🤩 التحدي النهاردة هيكون في مجال الحوسبة السحابية (#CloudComputing)، علشان تشوف أسئلة التحدي وتجاوب عليها من خلال اللينك ده: https://bit.ly/3Ph25Hk وعلشان نساعدك تحل كل الأسئلة صح جمعنالك أهم الدورات التدريبية والكلمات المهنية الموجودة على موقع مهارة تك في مجال الحوسبة السحابية (Cloud Computing): 🔸دورات تدريبية مقدمة في مجال الحوسبة السحابية (Cloud Computing) على مهارة تك: ◀️أمن الحوسبة السحابية: https://bit.ly/3VNKWt3 🔸كلمات مهنية مقدمة من مجموعة من الخبراء في مجال الحوسبة السحابية (Cloud Computing) على مهارة تك: ◀️مقدمة عن الحوسبة السحابية و خريطة لوظائف المجال: https://bit.ly/3J3XLHY متنساش تعمل منشن لصاحبك المتميز في مجال الحوسبة السحابية (Cloud Computing) وتخليه يشارك في تحدي النهاردة. 😉 ⚠ شروط وأحكام المسابقة: 1- يجب أن يكون للمشارك حساب فعّال على منصة مهارة تك للتمكن من المشاركة في المسابقة وحل الأسئلة. 2-مدة المسابقة من الساعة 6 نصف مساءاً وحتى الساعة 12 ظهر اليوم التالي. 3- الإجابة على المسابقة فقط من خلال الرابط الخاص بمسابقة اليوم والمرفق بها عبر صفحاتنا على مواقع التواصل الإجتماعي المختلفة. 4- احرص على الإجابة خلال المدة الزمنية المحددة للأسئلة والمرفقة بها بعد ضغط زر البدء. 5- يدخل السحب على الجائزة اليومية كل من أتم الإجابة الصحيحة على الأسئلة كاملة. 6- يتم اختيار الفائز يومياً من خلال قرعة إلكترونية. 7- يتم الإعلان عن اسم الفائز يومياً عبر صفحاتنا على مواقع التواصل الإجتماعي المختلفة الساعة 6 ونصف مساءاً كل يوم. 8- يربح الفائز في المسابقة قسيمة شراء قيمتها 1000 جنيه مصري من جوميا. 9- قيمة الجائزة غير قابلة للاستراد النقدي. 10- على الفائز أن يقوم بالرد على البريد الإلكتروني الخاص بإعلان الجائزة في موعد أقصاه 24 ساعة من استلام البريد، وإلا سوف نقوم بتسليم الجائزة لفائز آخر. #تعلّم_مع_مهارة_تك #MCIT #ITI #MahraTech ",
    },
    {
      id: "4",
      image: "/src/assets/background.png",
      time: "01:45 PM",
      title:
        " profile People are reacting to Esraa Mahmoud’s post: Hi everyone - I am looking for a new role as Mid Php / Laravel Developer and would appreciate your support. Thank you in advance for any connections, advice, or opportunities you can offer. #OpenToWork ",
    },
    {
      id: "5",
      image: "/src/assets/images.png",
      time: "05:45 PM",

      title: "Unread notification Mohamed Hammad reposted a document.",
    },

    {
      id: "6",
      image: "/src/assets/images.png",
      time: "05:45 PM",

      title: "Unread notification Mohamed Hammad reposted a document.",
    },
    {
      id: "7",
      image: "/src/assets/images.png",
      time: "05:45 PM",

      title: "Unread notification Mohamed Hammad reposted a document.",
    },
  ];

  return (
    <Layout>
      <MainNotification>
        <Filter>
          <div style={{backgroundColor:"green"}}>
            <span>all</span>
          </div>
          <div>
            <span>my posts</span>
          </div>
          <div>
            <span>mentions</span>
          </div>
        </Filter>
        <ContentAllNotific>
          {notific.map((notific) => {
            return <OneNotific notific={notific} />;
          })}
        </ContentAllNotific>
      </MainNotification>
    </Layout>
  );
};

export default Notifications;
