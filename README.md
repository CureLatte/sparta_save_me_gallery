# ๐จ ์ ํ์ ์ ์๋น์ค(9ํด์ค๊ฐค๋ฌ๋ฆฌ)

<br>

## ์๊ฐ
<p style="font-size: 1.2rem;">
9ํด์ค๊ฐค๋ฌ๋ฆฌ๋ ๋ฏธ์ ๊ด์ ์ปจ์์ผ๋ก ํ์ฌ,์ฒดํ(์ ํ์ ์์๋น์ค:AI)์ ํ๊ณ  
์ฒดํํ ๊ฒฐ๊ณผ๋ฌผ์ ์ ์(ํน์ ์ ์ฅ:CRUD) ํ๊ณ , ํ๊ธฐ(comment:CRUD) ๋ฅผ ๋จ๊ธธ ์ ์๋ ์น ์๋น์ค ์ด๋ฉฐ, ์ด๋ฒ ํ๋ก์ ํธ์์๋, ํ์ต ๋ด์ฉ์ ๋ณต์ต ๋ฐ ์ ์ฉ์ ์ฃผ ๋ชฉ์ ์ผ๋ก ์ ํ์์ต๋๋ค.
</p>


<br>


## ๐ ์ฌ์ฉํ ๊ธฐ์ 
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0e2fe3e0-cc58-4a1a-b340-858718d8ce47/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220302T100511Z&X-Amz-Expires=86400&X-Amz-Signature=b819acb29217ec2ba71db38a1bde47af4fb697db0c74e0c6c9d8ea63a68b20be&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" style="width: 66rem; height: 40rem; display: block; margin: 0 auto;">

- Django, Django-ninja
- Tensorflow
- Pytorch
- Javascript
- mySQL
- AWS: RDS, S3
<br>

# ๐ ํ๋ก์ ์ธํ
- ํจํค์ง: requirements.txt


- ํ์ํ ํ์ผ
  - local setting : db์ค์ 
  - .env : SECRETE_KEY ์ค์ 
    - ์ฐธ๊ณ  : https://django-environ.readthedocs.io/en/latest/getting-started.html 


## ๐ ํ๋ก์ ํธ๊ธฐ๊ฐ
<p style="font-size: 1.1rem">
2022๋ 2์22์ผ ~ 2022๋ 3์3์ผ
</p>

<br>


## ๐งโ๐ป๐ฉโ๐ป ํ๊ตฌ์ฑ ๋ฐ ์ญํ  ๐จโ๐ป๐งโ๐ป
### ํ๋ก ํธ
- ๊น์ฌ์ฑ๋
  * ์น ๋์์ธ
  * ๊ธฐ๋ฅ
    * ๋ค๋น๊ฒ์ด์ ์ธ๋๋ฐ ๊ธฐ๋ฅ
    * Up ๋ฒํผ ๊ธฐ๋ฅ
    * ์ ๋๋ฉ์ด์ ๊ธฐ๋ฅ
    * Mac ๋ฒํผ ๊ธฐ๋ฅ
    * ์์ฐ์ค๋ก์ด ์คํฌ๋กค 
    * ์ฌ๋ผ์ด๋
    * ์คํฌ๋กค ๋์์ธ ๋ณ๊ฒฝ
    * ์ํ ์คํผ๋ ์ ์ฉ
  
<br>

### ๋ฒก์๋ 
- ์ด๊ฐ์๋
    * commentapp ๊ธฐ๋ฅ๊ตฌํ
    * RDS์์ฑ
    * aws์น์๋ฒ 

  <br>
  
- ๊น์ฑ์ฐ๋
  * API๋ฌธ์ ์์ฑ
  * Activityapp ๊ธฐ๋ฅ๊ตฌํ
  
<br>

### ๋จธ์ ๋ฌ๋
- ์ก์์๋
  - ์ด๋ฏธ์ง ๋ณํ ์ธ๊ณต์ง๋ฅ ์๋ฒ ๋ด๋น
  - AWS EC2์ ์ธ๊ณต์ง๋ฅ ์๋ฒ ๊ตฌ์ถ

<br>


<br>

## โ์ฃผ์๊ธฐ๋ฅ
<br>

- ์น์ฌ์ดํธ์ ์ด์ฉ์ ๋๊ตฌ๋ ํ  ์ ์๋ค.(๋นํ์์ )
  - Activty
    - 9๊ฐ์ ํํ ์ค ์ ํํ๊ฑฐ๋, ์ง์  ํํ์ด ๋  ์ด๋ฏธ์ง๋ฅผ ์ ํํ์ฌ ์ด๋ฏธ์ง๋ฅผ ์์ฑํ  ์ ์๋ค.
    - ์์ฑํ ์ด๋ฏธ์ง๋ฅผ ๋ก์ปฌ์ ์ ์ฅ ํ  ์ ์๊ณ , ์น์ฌ์ดํธ์ ๊ฒฐ๊ณผ๋ฌผ์ ๊ฒ์ํ  ์ ์๋ค.
    - ์ ์ฅ๋ ๊ฒฐ๊ณผ๋ฌผ์ ๋ณธ์ธ์ด ์์ฑํ ๋น๋ฐ๋ฒํธ๋ฅผ ํตํด์๋ง ์ญ์  ํ  ์ ์๋ค.
    - ์์ฑ๋ ์ด๋ฏธ์ง๋ ํด๋นํ๋ ํํ์๋ฐ๋ผ ์ต์ ์์ผ๋ก ์๋ฐ์ดํธ ๋๋ค.
  
    <br>
    
  - Comment
    - ๋๊ธ์ ์์ฑ ํ  ๋, ์์์ ํ๋กํ ์ด๋ฏธ์ง๊ฐ ํจ๊ป ์ถ๊ฐ๋๋ค.
    - ์ญ์ ๋ ์์ฑํ ๋น๋ฐ๋ฒํธ๋ฅผ ํตํด์๋ง ์ญ์  ํ  ์ ์๋ค.
    - ํ์ด์ง๋ค์ด์์ ํตํด ์ต์ ์์ ๋๊ธ์ ๋ณผ ์ ์๋ค.
    

<br>

- AI
  - ์ด๋ฏธ์ง์ ํํ ๋ณํ์ด ๊ฐ๋ฅํ๋ค.
  - ์ฌ์ฉ์๋ก๋ถํฐ ์๋ ฅ๋ฐ์ ํํ์ฉ ์ด๋ฏธ์ง์ Mix ๊ฐ๋ฅํ๋ค.


<br>



## ๐ ๊ธฐํ 
<img src="https://blog.kakaocdn.net/dn/dqKNrm/btruUoKW7Wj/bpCkIaDevkDHNAlSBCHWd0/img.png" style="width: 65rem; height: 55rem; display: block; margin: 0 auto;">

## ๐ API
๐ ์์ธํ ์ฌํญ์ https://www.notion.so/API-fbf25514ace94bd7be1005588f38c64f

<img src="https://blog.kakaocdn.net/dn/b9vL1M/btruRLNnAD0/DqkvK4Smjrr43J5XuRT9g1/img.png" style="width: 55rem; height: 65rem;display: block; margin: 0 auto;">


## ๐พ DB
๐ ์์ธํ ์ฌํญ์ https://www.notion.so/DB-5270084d4247404290813dcee4727401

<img src="https://blog.kakaocdn.net/dn/bvSYaF/btruXT4gwKn/57xEhraDuQKXCMXPNBkSEk/img.png" style="width: 55rem; height: 59rem; display: block; margin: 0 auto;">

<br>

<br>

<br>

<br>



