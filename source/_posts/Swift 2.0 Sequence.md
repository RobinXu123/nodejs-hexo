title: Swift 2.0 Sequence
permalink: iOS_1
tags:
- iOS
- Swift
categories:
- 编程

---

什么是SequenceType? 我们直接看一下其定义：

    /// A type that can be iterated with a `for`...`in` loop.
    ///
    /// `SequenceType` makes no requirement on conforming types regarding
    /// whether they will be destructively "consumed" by iteration.  To
    /// ensure non-destructive iteration, constrain your *sequence* to
    /// `CollectionType`.
    ///
    /// As a consequence, it is not possible to run multiple `for` loops
    /// on a sequence to "resume" iteration:
    ///
    ///   for element in sequence {
    ///     if ... some condition { break }
    ///   }
    ///
    ///   for element in sequence {
    ///     // Not guaranteed to continue from the next element.
    ///   }
    ///
    /// `SequenceType` makes no requirement about the behavior in that
    /// case.  It is not correct to assume that a sequence will either be
    /// "consumable" and will resume iteration, or that a sequence is a
    /// collection and will restart iteration from the first element.
    /// A conforming sequence that is not a collection is allowed to
    /// produce an arbitrary sequence of elements from the second generator.
    public protocol SequenceType {
        /// A type that provides the *sequence*'s iteration interface and
        /// encapsulates its iteration state.
        typealias Generator : GeneratorType
        /// A type that represents a subsequence of some of the elements.
        typealias SubSequence
        /// Return a *generator* over the elements of this *sequence*.
        ///
        /// - Complexity: O(1).
        @warn_unused_result
        public func generate() -> Self.Generator
        /// Return a value less than or equal to the number of elements in
        /// `self`, **nondestructively**.
        ///
        /// - Complexity: O(N).
        @warn_unused_result
        public func underestimateCount() -> Int
        /// Return an `Array` containing the results of mapping `transform`
        /// over `self`.
        ///
        /// - Complexity: O(N).
        @warn_unused_result
        @rethrows public func map<T>(@noescape transform: (Self.Generator.Element) throws -> T) rethrows -> [T]
        /// Return an `Array` containing the elements of `self`,
        /// in order, that satisfy the predicate `includeElement`.
        @warn_unused_result
        @rethrows public func filter(@noescape includeElement: (Self.Generator.Element) throws -> Bool) rethrows -> [Self.Generator.Element]
        /// Call `body` on each element in `self` in the same order as a
        /// *for-in loop.*
        ///
        ///     sequence.forEach {
        ///       // body code
        ///     }
        ///
        /// is similar to:
        ///
        ///     for element in sequence {
        ///       // body code
        ///     }
        ///
        /// - Note: You cannot use the `break` or `continue` statement to exit the
        ///   current call of the `body` closure or skip subsequent calls.
        /// - Note: Using the `return` statement in the `body` closure will only
        ///   exit from the current call to `body`, not any outer scope, and won't
        ///   skip subsequent calls.
        ///
        /// - Complexity: O(`self.count`)
        @rethrows public func forEach(@noescape body: (Self.Generator.Element) throws -> ()) rethrows
        /// Returns a subsequence containing all but the first `n` elements.
        ///
        /// - Requires: `n >= 0`
        /// - Complexity: O(`n`)
        @warn_unused_result
        public func dropFirst(n: Int) -> Self.SubSequence
        /// Returns a subsequence containing all but the last `n` elements.
        ///
        /// - Requires: `self` is a finite sequence.
        /// - Requires: `n >= 0`
        /// - Complexity: O(`self.count`)
        @warn_unused_result
        public func dropLast(n: Int) -> Self.SubSequence
        /// Returns a subsequence, up to `maxLength` in length, containing the
        /// initial elements.
        ///
        /// If `maxLength` exceeds `self.count`, the result contains all
        /// the elements of `self`.
        ///
        /// - Requires: `maxLength >= 0`
        @warn_unused_result
        public func prefix(maxLength: Int) -> Self.SubSequence
        /// Returns a slice, up to `maxLength` in length, containing the
        /// final elements of `s`.
        ///
        /// If `maxLength` exceeds `s.count`, the result contains all
        /// the elements of `s`.
        ///
        /// - Requires: `self` is a finite sequence.
        /// - Requires: `maxLength >= 0`
        @warn_unused_result
        public func suffix(maxLength: Int) -> Self.SubSequence
        /// Returns the maximal `SubSequence`s of `self`, in order, that
        /// don't contain elements satisfying the predicate `isSeparator`.
        ///
        /// - Parameter maxSplit: The maximum number of `SubSequence`s to
        ///   return, minus 1.
        ///   If `maxSplit + 1` `SubSequence`s are returned, the last one is
        ///   a suffix of `self` containing the remaining elements.
        ///   The default value is `Int.max`.
        ///
        /// - Parameter allowEmptySubsequences: If `true`, an empty `SubSequence`
        ///   is produced in the result for each pair of consecutive elements
        ///   satisfying `isSeparator`.
        ///   The default value is `false`.
        ///
        /// - Requires: `maxSplit >= 0`
        @warn_unused_result
        @rethrows public func split(maxSplit: Int, allowEmptySlices: Bool, @noescape isSeparator: (Self.Generator.Element) throws -> Bool) rethrows -> [Self.SubSequence]
    }

字面意思就是使类型序列化，简单的说就是为了泛型结构能够使用for…in这种方便的循环取值操作。 在Swift的类型定义中，我们可以看到String、Array等这些些基本的类型都实现了SequenceType协议。  为了便于理解，我们还是来看一个实例就知道了。

    struct Stack<T> {
        var items = [T]()
        var count:Int {
            return items.count
        }

        mutating func push(item: T) {
            items.append(item)
        }

        mutating func pop() -> T {
            return items.last!
        }

        subscript(index: Int) -> T {
            get {
                precondition(index < items.count, "Index越界")
                return items[index]
            }
            set {
                precondition(index < items.count, "Index越界")
                items[index] = newValue
            }
        }
    }

    var stackOfStrings = Stack<String>()
    for i in 1...5 {
        stackOfStrings.push("stackTestValue_\(i)")
    }
    for item in stackOfStrings {
        print(item)
    }

> 编译器抛出了错误： 'Stack' does not have a member named 'Generator'

这个错误就是写本文的目的，我们来添加上序列化代码：

    extension Stack: SequenceType {
        func generate() -> AnyGenerator<T> {
            var index = 0
            return anyGenerator {
                if index < self.items.count {
                    return self.items[index++]
                } else {
                    return nil
                }
            }
        }
    }
