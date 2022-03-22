//도메인 추가
//도메인 모델에는 인터넷주소,도메인종류,클라이언트 비밀키가 들어간다.
const Sequelize=require('sequelize');


module.exports=class Domain extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            //nodecat 의 url ->웹 플랫픔 등록하기 처럼 호스트 검사
            host:{
                type:Sequelize.STRING(80),
                allowNull:false,
            },
            //ENUM - > 문자열이지만 free, or premium 만 가능하다 (좀더 상세한 타입)
            type:{
                type:Sequelize.ENUM('free','premium'),
                allowNullL:false,
            },
             //api 서버를 사용할때 비밀키,컬럼은 UUID -> 충돌가능성이 매우 적은 랜덤한 문자열
            //카카오에서 주는 key 처럼 key
            clientSecret:{
                type:Sequelize.UUID,
                allowNull:false,
            },
        },{
            sequelize,
            timestamps:true,
            paranoid:true,
            modelName:'Domain',
            tableName:'domains',
        });
    }

    static associate(db) {
        db.Domain.belongsTo(db.User);
      }
    };

//api 서버는 써드파티 서비스에서 api 를 가져가는데 제한을 둘려면 가져가는 사람을 알아야된다
//api 가입하고 도메인을 만들게 한다
//