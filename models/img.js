const db = require('../util/database');

module.exports = class Image {
  constructor(image_id, aid, image_url, points) {
    this.image_id = image_id;
    this.aid = aid;
    this.image_url = image_url;
    this.points = points;
  }

  static fetchAll() {
    return db.execute('SELECT image_id, aid,image_url, points FROM images');
  }

  static updatePoints(imageId, newPoints) {
    return db.execute('UPDATE images SET points = ? WHERE image_id = ?', [newPoints, imageId]);
  }

  static fetchTopTen() {
    return db.execute('SELECT image_id, aid,image_url, points FROM images ORDER BY points DESC LIMIT 10');
  }

  static fetchTopTenUser() {
    return db.execute('SELECT * FROM account');
  }
};