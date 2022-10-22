const {bookSelection} = require('./solution');
const {expect} = require('chai');
describe("Book Selection", () => {
  describe("Test for isGenreSuitable", () => {
    it("Check valid parameters", () => {
      expect(bookSelection.isGenreSuitable('Thriller', 1)).to.equal(`Books with Thriller genre are not suitable for kids at 1 age`);
      expect(bookSelection.isGenreSuitable('Horror', 1)).to.equal(`Books with Horror genre are not suitable for kids at 1 age`);
      expect(bookSelection.isGenreSuitable('Thriller', 21)).to.equal(`Those books are suitable`);
      expect(bookSelection.isGenreSuitable('Horror', 21)).to.equal(`Those books are suitable`);
      expect(bookSelection.isGenreSuitable('Fantasy', 10)).to.equal(`Those books are suitable`);
      expect(bookSelection.isGenreSuitable('Science', 11)).to.equal(`Those books are suitable`);
      expect(bookSelection.isGenreSuitable(20, 21)).to.equal(`Book bought. You have 1$ left`);
  });

  describe("Test for isItAffordable", () => {
    it("Check valid parameters", () => {
      expect(()=>bookSelection.isItAffordable([], [])).to.throw("Invalid input");
      expect(()=>bookSelection.isItAffordable('', '')).to.throw("Invalid input");
      expect(()=>bookSelection.isItAffordable(null, NaN)).to.throw("Invalid input");
      expect(bookSelection.isItAffordable(15, 10)).to.equal(`You don't have enough money`);
      expect(bookSelection.isItAffordable(10, 15)).to.equal(`Book bought. You have 5$ left`);
    });
  });
  describe("Test for suitableTitles", () => {
    it("Check for invalid parameters", () => {
      expect(() => bookSelection.suitableTitles("array", "genre").to.throw("Invalid input!"));
      expect(() => bookSelection.suitableTitles("genre", ["Horror", "Adventure", "Crime"]).to.throw("Invalid input!"));
      expect(() => bookSelection.suitableTitles(["Horror", "Adventure", "Crime"], 2).to.throw("Invalid input!"));
    });

    it("Check for valid parameters", () => {
      expect(
        bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Crime" },{ title: "Presumed Innocent", genre: "Crime" },],"Crime")).to.deep.equal(["The Da Vinci Code", "Presumed Innocent"]);
      expect(
        bookSelection.suitableTitles(
          [{ title: "The Guest List", genre: "Thriller" }],
          "Thriller"
        )
      ).to.deep.equal(["The Guest List"]);
      expect(
        bookSelection.suitableTitles(
          [{ title: "The Da Vinci Code", genre: "Crime" }],
          "none"
        )
      ).to.deep.equal([]);
    });
  });
});
});
