FROM fusuf/whatsasena:latest

RUN git clone https://github.com/GITHQCKER/New-vvvvv /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
